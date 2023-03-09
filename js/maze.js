import { Cell } from "./sprites/cell.js";
import { Object } from "./enums.js";
import { BlackDoor } from "./sprites/doors/black-door.js";
import { BlackKey } from "./sprites/keys/black-key.js";
import { Exit } from "./sprites/exit.js";
import { PlayerCharacter } from "./sprites/playerCharacter.js";
import { Wall } from './sprites/wall.js';

export class Maze {

    board = [];

    constructor(mazeConfig) {
        this.#initializeBoard(mazeConfig);
    }

    getCell(x, y) {
        return this.board[y][x];
    }

    #initializeBoard(mazeConfig) {
        for (let row of mazeConfig) {
            const boardRow = [];

            for (let object of row) {
                const cell = new Cell();
                if (object === Object.Player)
                    cell.sprite = new PlayerCharacter();
                else if (object === Object.Exit)
                    cell.sprite = new Exit();
                else if (object === Object.Wall)
                    cell.sprite = new Wall();
                else if (object === Object.BlackKey)
                    cell.sprite = new BlackKey();
                else if (object === Object.BlackDoor)
                    cell.sprite = new BlackDoor();

                boardRow.push(cell);
            }
            this.board.push(boardRow);
        }
    }
}