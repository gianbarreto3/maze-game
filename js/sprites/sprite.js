export class Sprite {

    constructor(name) {
        this.name = name;
    }

    createSprite() {
        throw new Error('Subclass must override this method');
    }

    getParentElement() {
        const sprite = document.getElementsByClassName(this.name)[0];
        return sprite.parentElement;
    }
}