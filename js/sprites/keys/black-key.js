import { Color } from "../../enums.js";
import { Key } from "./key.js";

export class BlackKey extends Key {

    constructor() {
        super(Color.Black, 'black-key');
    }

    createSprite() {
        const blackKey = document.createElement('i');
        blackKey.classList.add('fa-solid', 'fa-key', this.name);
        return blackKey;
    }
}