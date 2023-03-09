import { Object } from './enums.js';

const level1 = {
    number: 1,
    maze: [
        [Object.Player, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Exit]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    },
    completionTime: 5
};

const level2 = {
    number: 2,
    maze: [
        [Object.Player, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.Wall],
        [Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Exit]
        
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    },
    completionTime: 5
};

const level3 = {
    number: 3,
    maze: [
        [Object.Player, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Exit],
        [Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall],
        [Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.Wall],
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    },
    completionTime: 7
};

const level4 = {
    number: 4,
    maze: [
        [Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall],
        [Object.Player, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None],
        [Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.None, Object.None],
        [Object.None, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall],
        [Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.Exit],
        [Object.None, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 2
    },
    completionTime: 7
};

const level5 = {
    number: 5,
    maze: [
        [Object.Player, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.BlackKey, Object.None, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.BlackDoor],
        [Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.Exit]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    },
    completionTime: 10
};

export const levels = {
    level1,
    level2,
    level3,
    level4,
    level5,
    total: 5
};

// None Row: [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None]