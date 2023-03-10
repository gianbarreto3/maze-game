import { Cell } from "./sprites/cell.js";
import { Color, Object } from "./enums.js";
import { BlackDoor } from "./sprites/doors/black-door.js";
import { BlackKey } from "./sprites/keys/black-key.js";
import { BlueDoor } from "./sprites/doors/blue-door.js";
import { BlueKey } from "./sprites/keys/blue-key.js";
import { GreenDoor } from "./sprites/doors/green-door.js";
import { GreenKey } from "./sprites/keys/green-key.js";
import { Button } from "./sprites/button.js";
import { Chest } from "./sprites/chest.js";
import { Crate } from "./sprites/crate.js";
import { Exit } from "./sprites/exit.js";
import { Hammer } from "./sprites/hammer.js";
import { Panel } from "./sprites/panel.js";
import { RGBPanel } from "./sprites/rgb-panel.js";
import { PlayerCharacter } from "./sprites/playerCharacter.js";
import { Wall } from './sprites/wall.js';

export class Maze {

    board = [];

    constructor(mazeConfig) {
        this.#initializeBoard(mazeConfig);
    }

    getCellToRight(x, y) {
        if (x + 1 < this.board[0].length) 
            return this.board[y][x + 1];
        return null;
    }

    getCell(x, y) {
        return this.board[y][x];
    }

    getCellContaining(spriteName) {
        for (let row = 0; row < this.board.length; row++) {
            for (let column = 0; column < this.board[0].length; column++) {
                const cell = this.board[row][column];
                if (cell.containsSprite() && spriteName === cell.sprite.name)
                    return cell;
            }
        }

        return null;
    }

    removeSprite(spriteName) {
        const cell = this.getCellContaining(spriteName);
        if (cell !== null)
            cell.removeSprite();
        return cell;
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
                else if (object === Object.BlueButton)
                    cell.sprite = new Button(Color.Blue, new Panel(Color.Blue));
                else if (object === Object.BluePanel)
                    cell.sprite = new Panel(Color.Blue);
                else if (object === Object.GreenButton)
                    cell.sprite = new Button(Color.Green, new Panel(Color.Green));
                else if (object === Object.GreenPanel)
                    cell.sprite = new Panel(Color.Green);
                else if (object === Object.RedButton)
                    cell.sprite = new Button(Color.Red, new Panel(Color.Red));
                else if (object === Object.RedButtonReset)
                    cell.sprite = new Button(Color.Red, new Panel(Color.Red), true);
                else if (object === Object.RedPanel)
                    cell.sprite = new Panel(Color.Red);
                else if (object === Object.Crate) 
                    cell.sprite = new Crate();
                else if (object === Object.RGBPanel)
                    cell.sprite = new RGBPanel();
                else if (object === Object.RGBButtonBlue)
                    cell.sprite = new Button(Color.Blue, new RGBPanel(), false, true);
                else if (object === Object.RGBButtonGreen)
                    cell.sprite = new Button(Color.Green, new RGBPanel(), false, true);
                else if (object === Object.RGBButtonRed)
                    cell.sprite = new Button(Color.Red, new RGBPanel(), false, true);
                else if (object === Object.InvisibleWall)
                    cell.sprite = new Wall(true);

                boardRow.push(cell);
            }
            this.board.push(boardRow);
        }
    }
}