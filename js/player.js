import { Cell, Direction, Items } from './enums.js';

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
        if (toCell === null || toCell === Cell.Wall)
            return false;
        else if (this.isDoor(toCell) && !this.canOpenDoor(toCell)) {
            return false;
        }
        
        return true;
    }

    canOpenDoor(toCell) {
        if (toCell === Cell.BlackDoor && this.items.includes(Items.BlackKey))
            return true;

        return false;
    }

    isDoor(cell) {
        return cell === Cell.BlackDoor;
    }

    pickupItem(toCell) {
        if (toCell === Cell.BlackKey) {
            this.items.push(Items.BlackKey);
        }
    }

    useItem(toCell) {
        if (toCell === Cell.BlackDoor) {
            this.items = this.items.filter(item => item !== Items.BlackKey);
        }
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