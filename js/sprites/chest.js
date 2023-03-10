import { Sprite } from "./sprite.js";

export class Chest extends Sprite {

    constructor(color, itemInChest) {
        super(`${color}-chest`);
        this.itemInChest = itemInChest;
    }

    createSprite() {
        const chest = document.createElement('i');
        chest.classList.add('fa-solid', 'fa-toolbox', this.name);
        return chest;
    }

    itemRequiredToOpen() {
        return 'hammer';
    }

    open() {
        return this.itemInChest;
    }
}