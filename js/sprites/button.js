import { Sprite } from "./sprite.js";

export class Button extends Sprite {

    constructor(color, panel, reset = false, pattern = false) {
        super(`${color}-button`);
        this.panel = panel;
        this.pressed = false;
        this.reset = reset;
    }

    press() {
        const button = this.getElement();
        button.classList.add('button--pressed');
        this.pressed = true;
    }

    unpress() {
        const button = this.getElement();
        button.classList.remove('button--pressed');
        this.pressed = false;
    }

    createSprite() {
        const button = document.createElement('div');
        button.classList.add('button', this.name);
        return button;
    }
}