import { Direction, Keys } from "./enums.js";
import { Player } from "./player.js";
import { renderItems, renderLevel } from "./level-renderer.js";
import { levels } from './levels.js';
import { Maze } from "./maze.js";

export class Game {

    maze;
    mazeElement;
    player;
    currentLevel;
    levelTimer;
    currentLevelTime;

    initialize() {
        this.maze = [];
        this.mazeElement = document.getElementById('maze');
        document.onkeydown = this.setPlayerControls.bind(this);
        this.loadLevel(levels.level1);
    }

    loadLevel(level) {
        this.currentLevel = level.number;
        this.maze = new Maze(level.maze);
        this.player = new Player(
            level.playerStartPosition.xPosition, 
            level.playerStartPosition.yPosition
        );
        renderLevel(level.number, this.maze.board);
        this.levelTimer = this.startTimer(level.completionTime);
    }

    loadNextLevel() {
        const nextLevel = `level${this.currentLevel + 1}`;
        this.loadLevel(levels[nextLevel]);
    }

    levelCompleted() {
        const gameContainer = document.getElementsByClassName('game-container')[0];
        const levelContainer = document.getElementsByClassName('level-container')[0];
        const levelCompleteMenu = document.getElementById('levelCompleteMenu');
        const levelCompleteTitle = document.getElementById('levelCompleteTitle');
        const nextLevelButton = document.getElementById('nextLevelButton');

        levelCompleteTitle.innerText = this.currentLevel !== levels.total ? `Level ${this.currentLevel} Complete` : 'Woo hoo! You did it!';
        levelContainer.style.display = 'none';
        levelCompleteMenu.style.display = 'block';
        gameContainer.style.display = 'flex';

        if (this.currentLevel == levels.total) {
            nextLevelButton.style.display = 'none';
            const mainMenuButton = document.getElementById('mainMenuButton');
            mainMenuButton.focus();
        } else {
            nextLevelButton.focus();
        }
    }

    playerMoved(previousPlayerPositionX, previousPlayerPositionY) {
        return previousPlayerPositionX !== this.player.xPosition ||
            previousPlayerPositionY !== this.player.yPosition;
    }

    setPlayerControls(event) {
        if (event.repeat)
            return;

        const playerPositionX = this.player.xPosition;
        const playerPositionY = this.player.yPosition;
        let toCell;

        switch (event.key) {
            case Keys.LEFT_ARROW:
                toCell = playerPositionX - 1 > -1 ? this.maze.getCell(playerPositionX - 1, playerPositionY) : null;
                this.player.move(Direction.Left, toCell);
                break;
            case Keys.UP_ARROW:
                toCell = playerPositionY - 1 > -1 ? this.maze.getCell(playerPositionX, playerPositionY - 1) : null;
                this.player.move(Direction.Up, toCell);
                break;
            case Keys.RIGHT_ARROW:
                toCell = playerPositionX + 1 < this.maze.board[0].length ? this.maze.getCell(playerPositionX + 1, playerPositionY) : null;
                this.player.move(Direction.Right, toCell);
                break;
            case Keys.DOWN_ARROW:
                toCell = playerPositionY + 1 < this.maze.board.length ? this.maze.getCell(playerPositionX, playerPositionY + 1) : null;
                this.player.move(Direction.Down, toCell);
                break;
        }

        if (this.playerMoved(playerPositionX, playerPositionY)) {
            if (toCell.containsItem() || toCell.containsDoor() || toCell.containsChest()) {
                toCell.removeSprite();
                renderItems(this.player.items);
            } else if (toCell.isExit() && this.currentLevelTime > 0) {
                this.endTimer();
                this.levelCompleted()
            }
        }
    }

    startTimer(levelCompletionTime) {
        const timer = document.getElementById('timer');
        timer.innerText = `${levelCompletionTime}s`;
        this.currentLevelTime = levelCompletionTime;

        function decrementTimer() {
            timer.innerText = `${--this.currentLevelTime}s`;
            if (this.currentLevelTime === 0)
                this.gameOver();
        }

        return setInterval(decrementTimer.bind(this), 1000);
    }

    endTimer() {
        clearInterval(this.levelTimer);
        this.levelTimer = null;
    }

    gameOver() {
        this.endTimer();
        const gameContainer = document.getElementsByClassName('game-container')[0];
        const gameOverScreen = document.getElementById('gameOverScreen');
        const levelContainer = document.getElementsByClassName('level-container')[0];
        const startOverButton = document.getElementById('startOverButton');

        levelContainer.style.display = 'none';
        gameOverScreen.style.display = 'block';
        gameContainer.style.display = 'flex';
        startOverButton.focus();
    }
}