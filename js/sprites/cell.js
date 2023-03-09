import { Door } from "./doors/door.js";
import { Exit } from "./exit.js";
import { Item } from "./item.js";
import { Key } from "./keys/key.js";
import { PlayerCharacter } from "./playerCharacter.js";
import { Wall } from "./wall.js";

export class Cell {

    sprite = null;

    containsDoor() {
        return this.sprite instanceof Door;
    }

    containsItem() {
        return this.sprite instanceof Item;
    }

    containsKey() {
        return this.sprite instanceof Key;
    }

    containsPlayer() {
        return this.sprite instanceof PlayerCharacter;
    }

    containsWall() {
        return this.sprite instanceof Wall;
    }

    isEmpty() {
        return this.sprite === null;
    }

    isExit() {
        return this.sprite instanceof Exit;
    }

    isWalkable() {
        return !this.containsWall() && !this.containsDoor();
    }

    removeSprite() {
        const parentElement = this.sprite.getParentElement();
        parentElement.innerHTML = '';
        this.sprite = null;
    }
}