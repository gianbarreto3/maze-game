import { Sprite } from "../sprite.js";

export class Door extends Sprite {

    constructor(color, name) {
        super(name);
        this.color = color;
    }

    keyRequired() {
        return null;
    }
}