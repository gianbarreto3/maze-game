import { Color } from "../../enums.js";
import { Door } from "./door.js";

export class GreenDoor extends Door {

    constructor() {
        super(Color.Green, 'green-door');
    }

    createSprite() {
        const greenDoor = document.createElement('div');
        greenDoor.classList.add('door', this.name);

        const lock = document.createElement('i');
        lock.classList.add('fa-solid', 'fa-lock', 'door-lock');
        greenDoor.appendChild(lock);

        return greenDoor;
    }

    keyRequired() {
        return 'green-key';
    }
}