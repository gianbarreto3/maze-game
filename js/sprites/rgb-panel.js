import { Panel } from "./panel.js";

export class RGBPanel extends Panel {

    constructor() {
        super('rgb')
    }

    createSprite() {
        const panel = document.createElement('div');
        panel.classList.add('panel', this.name);
        return panel;
    }

    canBeOpened(player, maze) {
        if (player.buttonsPressed?.length === 3) {
            const buttonsPressed = player.buttonsPressed;
            const sequenceMatched = buttonsPressed[0] === 'red-button' &&
                buttonsPressed[1] === 'green-button' &&
                buttonsPressed[2] === 'blue-button';
            
            if (sequenceMatched)
                return true;
            else {
                this.resetButtons(maze);
                player.buttonsPressed = [];
            }
        }
            
        return false;
    }

    resetButtons(maze) {
        const blueButtonCell = maze.getCellContaining('blue-button');
        const greenButtonCell = maze.getCellContaining('green-button');
        const redButtonCell = maze.getCellContaining('red-button');

        blueButtonCell.sprite.unpress();
        greenButtonCell.sprite.unpress();
        redButtonCell.sprite.unpress();
    }
}