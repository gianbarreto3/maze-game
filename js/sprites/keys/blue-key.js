import { Color } from "../../enums.js";
import { Key } from "./key.js";

export class BlueKey extends Key {

    constructor() {
        super(Color.Blue, 'blue-key');
    }

    createSprite() {
        const blueKey = document.createElement('i');
        blueKey.classList.add('fa-solid', 'fa-key', this.name);
        return blueKey;
    }
}