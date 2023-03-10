import { Item } from "./item.js";

export class Hammer extends Item {

    constructor() {
        super('hammer');
    }

    createSprite() {
        const hammer = document.createElement('i');
        hammer.classList.add('fa-solid', 'fa-hammer', this.name);
        return hammer;
    }
}