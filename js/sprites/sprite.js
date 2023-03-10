export class Sprite {

    constructor(name) {
        this.name = name;
    }

    createSprite() {
        throw new Error('Subclass must override this method');
    }

    getElement() {
        return document.getElementsByClassName(this.name)[0];
    }
}