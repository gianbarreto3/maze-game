import { Color } from "../../enums.js";
import { Door } from "./door.js";

export class BlueDoor extends Door {

    constructor() {
        super(Color.Blue, 'blue-door');
    }

    createSprite() {
        const blueDoor = document.createElement('div');
        blueDoor.classList.add('door', this.name);

        const lock = document.createElement('i');
        lock.classList.add('fa-solid', 'fa-lock', 'door-lock');
        blueDoor.appendChild(lock);

        return blueDoor;
    }

    keyRequired() {
        return 'blue-key';
    }
}