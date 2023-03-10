import { Door } from "./doors/door.js";
import { Chest } from "./chest.js";
import { Crate } from "./crate.js";
import { Exit } from "./exit.js";
import { Item } from "./item.js";
import { Key } from "./keys/key.js";
import { PlayerCharacter } from "./playerCharacter.js";
import { Wall } from "./wall.js";
import { Button } from "./button.js";
import { Panel } from "./panel.js";

export class Cell {

    element = null;
    sprite = null;

    containsButton() {
        return this.sprite instanceof Button;
    }

    containsChest() {
        return this.sprite instanceof Chest;
    }

    containsCrate() {
        return this.sprite instanceof Crate;
    }

    containsDoor() {
        return this.sprite instanceof Door;
    }

    containsItem() {
        return this.sprite instanceof Item;
    }

    containsKey() {
        return this.sprite instanceof Key;
    }

    containsPanel() {
        return this.sprite instanceof Panel;
    }

    containsPlayer() {
        return this.sprite instanceof PlayerCharacter;
    }

    containsSprite() {
        return this.sprite !== null;
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

    addSprite(sprite) {
        if (sprite instanceof Crate && this.sprite instanceof Button) {
            this.sprite.getElement().style.display = 'none';
        }
        this.sprite = sprite;
        this.element.appendChild(sprite.createSprite());
    }

    removeSprite() {
        this.element.innerHTML = '';
        this.sprite = null;
    }
}