import { Color } from "../../enums.js";
import { Key } from "./key.js";

export class GreenKey extends Key {

    constructor() {
        super(Color.Green, 'green-key');
    }

    createSprite() {
        const greenKey = document.createElement('i');
        greenKey.classList.add('fa-solid', 'fa-key', this.name);
        return greenKey;
    }
}