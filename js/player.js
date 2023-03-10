import { Direction } from './enums.js';
import { Maze } from './maze.js';

export class Player {
    
    constructor(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.moveDistance = 45;
        this.playerElement = document.getElementById('player');
        this.top = 0;
        this.left = 0;
        this.items = [];
        this.buttonsPressed = [];
    }

    canMove(toCell, maze) {
        if (toCell === null || toCell.containsWall() || toCell.containsPanel()) {
            return false;
        } else if (toCell.containsDoor()) {
            return this.unlockDoor(toCell.sprite);
        } else if (toCell.containsChest()) {
            return this.openChest(toCell.sprite);
        } else if (toCell.containsCrate()) {
            const cellToRight = maze.getCellToRight(this.xPosition, this.yPosition);
            if (toCell !== cellToRight)
                return false;
            else {
                const cellToRightOfCrate = maze.getCell(this.xPosition + 2, this.yPosition);
                if (cellToRightOfCrate.containsWall())
                    return false;

                if (cellToRightOfCrate.containsButton()) {
                    const button  = cellToRightOfCrate.sprite;
                    button.press;
                    maze.removeSprite(button.panel.name);
                }
                const crate = cellToRight.sprite;
                cellToRight.removeSprite();
                cellToRightOfCrate.addSprite(crate);
            }
        }

        return true;
    }

    openChest(chest) {
        const itemNeeded = chest.itemRequiredToOpen();
        for (let item of this.items) {
            if (item.name === itemNeeded) {
                this.pickupItem(chest.open());
                return true;
            }
        }

        return false;
    }

    unlockDoor(door) {
        const keyNeeded = door.keyRequired();
        for (let item of this.items) {
            if (item.name === keyNeeded) {
                this.useItem(item);
                return true;
            }
        }

        return false;
    }

    pickupItem(item) {
        this.items.push(item);
    }

    useItem(itemToUse) {
        this.items = this.items.filter(item => item.name !== itemToUse.name);
    }

    move(direction, toCell, maze) {
        if (this.canMove(toCell, maze)) {
            switch (direction) {
                case Direction.Left:
                    this.moveLeft();
                    break;
                case Direction.Up:
                    this.moveUp();
                    break;
                case Direction.Right:
                    this.moveRight();
                    break;
                case Direction.Down:
                    this.moveDown();
            }

            if (toCell.containsItem())
                this.pickupItem(toCell.sprite);
            else if (toCell.containsButton() && !toCell.sprite.pressed)
                this.buttonsPressed.push(toCell.sprite.name);
        }
    }

    moveDown() {
        this.top += this.moveDistance;
        player.style.top = this.top + 'px';
        this.yPosition++;
    }

    moveLeft() {
        this.left -= this.moveDistance;
        player.style.left = this.left + 'px';
        this.xPosition--;
    }

    moveRight() {
        this.left += this.moveDistance;
        player.style.left = this.left + 'px';
        this.xPosition++;
    }

    moveUp() {
        this.top -= this.moveDistance;
        player.style.top = this.top + 'px';
        this.yPosition--;
    }
}