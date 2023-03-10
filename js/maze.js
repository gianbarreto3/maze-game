import { Cell } from "./sprites/cell.js";
import { Color, Object } from "./enums.js";
import { BlackDoor } from "./sprites/doors/black-door.js";
import { BlackKey } from "./sprites/keys/black-key.js";
import { BlueDoor } from "./sprites/doors/blue-door.js";
import { BlueKey } from "./sprites/keys/blue-key.js";
import { GreenDoor } from "./sprites/doors/green-door.js";
import { GreenKey } from "./sprites/keys/green-key.js";
import { Chest } from "./sprites/chest.js";
import { Exit } from "./sprites/exit.js";
import { Hammer } from "./sprites/hammer.js";
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
                else if (object === Object.BlueKey)
                    cell.sprite = new BlueKey();
                else if (object === Object.BlueDoor)
                    cell.sprite = new BlueDoor();
                else if (object === Object.GreenKey)
                    cell.sprite = new GreenKey();
                else if (object === Object.GreenDoor)
                    cell.sprite = new GreenDoor();
                else if (object === Object.Hammer)
                    cell.sprite = new Hammer();
                else if (object === Object.BlackKeyChest)
                    cell.sprite = new Chest(Color.Brown, new BlackKey());
                else if (object === Object.BlueKeyChest)
                    cell.sprite = new Chest(Color.Blue, new GreenKey());
                else if (object === Object.GreenKeyChest)
                    cell.sprite = new Chest(Color.Green, new BlueKey());

                boardRow.push(cell);
            }
            this.board.push(boardRow);
        }
    }
}