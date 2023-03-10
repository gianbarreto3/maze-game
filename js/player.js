import { Direction } from './enums.js';

export class Player {
    
    constructor(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.moveDistance = 45;
        this.playerElement = document.getElementById('player');
        this.top = 0;
        this.left = 0;
        this.items = [];
    }

    canMove(toCell) {
        if (toCell === null || toCell.containsWall())
            return false;
        else if (toCell.containsDoor()) {
            return this.unlockDoor(toCell.sprite);
        } else if (toCell.containsChest()) {
            return this.openChest(toCell.sprite);
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

    move(direction, toCell) {
        if (this.canMove(toCell)) {
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