import { Sprite } from "./sprite.js";

export class Wall extends Sprite {

    constructor() {
        super('wall');
    }

    createSprite() {
        const wall = document.createElement('div');
        wall.classList.add(this.name);
        return wall;
    }
}