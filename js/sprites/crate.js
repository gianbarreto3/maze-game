import { Sprite } from "./sprite.js";

export class Crate extends Sprite {

    constructor() {
        super('crate');
    }

    createSprite() {
        const crate = document.createElement('div');
        crate.classList.add(this.name);
        return crate;
    }
}