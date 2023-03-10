import { Sprite } from "./sprite.js";

export class PlayerCharacter extends Sprite {

    constructor(name) {
        super('player-character');
    }
    
    createSprite() {
        const player = document.createElement('i');
        player.classList.add('fa-solid', 'fa-person', this.name);
        player.setAttribute('id', 'player');
        return player;
    }
}