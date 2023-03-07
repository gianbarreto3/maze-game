import { Cell, Direction, ItemToIconClasses, Keys } from "./enums.js";
import { Player } from "./player.js";
import { renderItems, renderLevel } from "./level-renderer.js";
import { levels } from './levels.js';

export class Game {

    maze;
    mazeElement;
    player;
    currentLevel;

    cloneMaze(maze) {
        let mazeClone = [];

        for (let row of maze)
            mazeClone.push([ ...row ]);

        return mazeClone;
    }

    initialize() {
        this.maze = [];
        this.mazeElement = document.getElementById('maze');
        document.onkeydown = this.setPlayerControls.bind(this);
        this.loadLevel(levels.level1);
    }

    loadLevel(level) {
        this.currentLevel = level.number;
        this.maze = this.cloneMaze(level.maze);
        this.player = new Player(
            level.playerStartPosition.xPosition, 
            level.playerStartPosition.yPosition
        );
        renderLevel(level);
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

        if (this.currentLevel == levels.total)
            nextLevelButton.style.display = 'none';
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
                toCell = playerPositionX - 1 > -1 ? this.maze[playerPositionY][playerPositionX - 1] : null;
                this.player.move(Direction.Left, toCell);
                break;
            case Keys.UP_ARROW:
                toCell = playerPositionY - 1 > -1 ? this.maze[playerPositionY - 1][playerPositionX] : null;
                this.player.move(Direction.Up, toCell);
                break;
            case Keys.RIGHT_ARROW:
                toCell = playerPositionX + 1 < this.maze[0].length ? this.maze[playerPositionY][playerPositionX + 1] : null;
                this.player.move(Direction.Right, toCell);
                break;
            case Keys.DOWN_ARROW:
                toCell = playerPositionY + 1 < this.maze.length ? this.maze[playerPositionY + 1][playerPositionX] : null;
                this.player.move(Direction.Down, toCell);
                break;
        }

        if (this.playerMoved(playerPositionX, playerPositionY)) {
            if (this.cellContainsItem(toCell)) {
                this.player.pickupItem(toCell);
                this.removeItemFromMaze(toCell);
                renderItems(this.player.items);
            } else if (this.player.isDoor(toCell)) {
                this.player.useItem(toCell);
                this.removeDoorFromMaze(toCell);
                renderItems(this.player.items);
                
            } else if (toCell === Cell.Exit)
                setTimeout(() => this.levelCompleted(), 10);
        }
    }

    cellContainsItem(toCell) {
        return toCell === Cell.BlackKey;
    }

    removeDoorFromMaze(toCell) {
        if (toCell === Cell.BlackDoor) {
            const blackDoor = document.getElementsByClassName('black-door')[0];
            blackDoor.parentElement.innerHTML = '';
        }

        this.clearCurrentCell();
    }

    removeItemFromMaze(toCell) {
        if (toCell === Cell.BlackKey) {
            const blackKey = document.getElementsByClassName('black-key')[0];
            blackKey.parentElement.innerHTML = '';
        }

        this.clearCurrentCell();
    }

    clearCurrentCell() {
        this.maze[this.player.yPosition][this.player.xPosition] = Cell.Empty;
    }
}