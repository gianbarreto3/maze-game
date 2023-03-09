import { Sprite } from "./sprite.js";

export class Exit extends Sprite {

    constructor() {
        super('exit-text');
    }

    createSprite() {
        const exit = document.createElement('span');
        exit.classList.add(this.name);
        exit.innerText = 'EXIT';
        return exit;
    }
}