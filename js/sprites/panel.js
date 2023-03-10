import { Sprite } from "./sprite.js";

export class Panel extends Sprite {

    constructor(color) {
        super(`${color}-panel`)
    }

    createSprite() {
        const panel = document.createElement('div');
        panel.classList.add('panel', this.name);
        return panel;
    }
}