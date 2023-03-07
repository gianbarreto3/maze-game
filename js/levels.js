import { Cell } from './enums.js';

const level1 = {
    number: 1,
    maze: [
        [Cell.Player, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Exit]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    }
};

const level2 = {
    number: 2,
    maze: [
        [Cell.Player, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Exit]
        
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    }
};

const level3 = {
    number: 3,
    maze: [
        [Cell.Player, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Exit],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall],
        [Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall],
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    }
};

const level4 = {
    number: 4,
    maze: [
        [Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty],
        [Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall],
        [Cell.Player, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall],
        [Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Exit],
        [Cell.Empty, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 2
    }
};

const level5 = {
    number: 5,
    maze: [
        [Cell.Player, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty],
        [Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall],
        [Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.BlackKey, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty],
        [Cell.Empty, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty],
        [Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Wall, Cell.Wall, Cell.Empty, Cell.Wall, Cell.BlackDoor],
        [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Wall, Cell.Exit]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    }
};

export const levels = {
    level1,
    level2,
    level3,
    level4,
    level5,
    total: 5
};

// Empty Row: [Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty, Cell.Empty]