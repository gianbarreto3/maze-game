import { Direction, Keys } from "./enums.js";
import { Player } from "./player.js";
import { renderItems, renderLevel } from "./level-renderer.js";
import { levels } from './levels.js';
import { Maze } from "./maze.js";
import { RGBPanel } from "./sprites/rgb-panel.js";

export class Game {

    maze;
    mazeElement;
    player;
    currentLevel;
    levelTimer;
    currentLevelTime;
    #cellWhosePanelWasRemoved;

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

    restartLevel() {
        const level = `level${this.currentLevel}`;
        this.loadLevel(levels[level]);
    }

    setPlayerControls(event) {
        if (event.repeat)
            return;

        const playerPositionX = this.player.xPosition;
        const playerPositionY = this.player.yPosition;
        const previousCell = this.maze.getCell(playerPositionX, playerPositionY);
        let toCell;

        switch (event.key) {
            case Keys.A:
            case Keys.LEFT_ARROW:
                toCell = playerPositionX - 1 > -1 ? this.maze.getCell(playerPositionX - 1, playerPositionY) : null;
                this.player.move(Direction.Left, toCell, this.maze);
                break;
            case Keys.W:
            case Keys.UP_ARROW:
                toCell = playerPositionY - 1 > -1 ? this.maze.getCell(playerPositionX, playerPositionY - 1) : null;
                this.player.move(Direction.Up, toCell, this.maze);
                break;
            case Keys.D:
            case Keys.RIGHT_ARROW:
                toCell = playerPositionX + 1 < this.maze.board[0].length ? this.maze.getCell(playerPositionX + 1, playerPositionY) : null;
                this.player.move(Direction.Right, toCell, this.maze);
                break;
            case Keys.S:
            case Keys.DOWN_ARROW:
                toCell = playerPositionY + 1 < this.maze.board.length ? this.maze.getCell(playerPositionX, playerPositionY + 1) : null;
                this.player.move(Direction.Down, toCell, this.maze);
                break;
            case Keys.R:
                this.endTimer();
                this.restartLevel();
                return;
        }

        if (this.playerMoved(playerPositionX, playerPositionY)) {
            if (toCell.containsItem() || toCell.containsDoor() || toCell.containsChest()) {
                toCell.removeSprite();
                renderItems(this.player.items);
            } else if (toCell.containsButton()) {
                const button = toCell.sprite;
                if (!button.pressed) {
                    button.press();

                    if (button.panel instanceof RGBPanel) {
                        if (button.panel.canBeOpened(this.player, this.maze)) {
                            this.maze.removeSprite(button.panel.name);
                        }
                    } else {
                        this.#cellWhosePanelWasRemoved = this.maze.removeSprite(button.panel.name);
                    }
                }
            } else if (previousCell.containsButton() && previousCell.sprite.pressed && previousCell.sprite.reset) {
                const button = previousCell.sprite;
                button.unpress();
                this.#cellWhosePanelWasRemoved.sprite = button.panel;
                this.#cellWhosePanelWasRemoved.element.appendChild(button.panel.createSprite());
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
        if (this.levelTimer) {
            clearInterval(this.levelTimer);
            this.levelTimer = null;
        }
    }

    gameOver() {
        this.endTimer();
        const gameContainer = document.getElementsByClassName('game-container')[0];
        const gameOverScreen = document.getElementById('gameOverScreen');
        const levelContainer = document.getElementsByClassName('level-container')[0];
        const restartLevelButton = document.getElementById('restartLevelButton');

        levelContainer.style.display = 'none';
        gameOverScreen.style.display = 'block';
        gameContainer.style.display = 'flex';
        restartLevelButton.focus();
    }
}