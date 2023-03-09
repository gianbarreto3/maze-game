import { Color } from "../../enums.js";
import { Door } from "./door.js";

export class BlackDoor extends Door {

    constructor() {
        super(Color.Black, 'black-door');
    }

    createSprite() {
        const blackDoor = document.createElement('div');
        blackDoor.classList.add('door', this.name);

        const lock = document.createElement('i');
        lock.classList.add('fa-solid', 'fa-lock', 'black-door-lock');
        blackDoor.appendChild(lock);

        return blackDoor;
    }

    keyRequired() {
        return 'black-key';
    }
}