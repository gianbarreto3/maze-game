import { Item } from "../item.js";

export class Key extends Item {

    constructor(color, name) {
        super(name);
        this.color = color;
    }
}