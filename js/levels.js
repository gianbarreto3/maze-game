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

const level6 = {
    number: 6,
    maze: [
        [Object.Player, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.BlueKey],
        [Object.None, Object.BlackDoor, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.BlackKey, Object.Wall, Object.None],
        [Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall],
        [Object.Wall, Object.None, Object.None, Object.BlueDoor, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None],
        [Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Exit]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    },
    completionTime: 15
};

const level7 = {
    number: 7,
    maze: [
        [Object.Exit, Object.None, Object.Wall, Object.None, Object.Player, Object.None, Object.Wall, Object.None, Object.None, Object.None],
        [Object.Wall, Object.BlueDoor, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.BlackKey, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall],
        [Object.None, Object.None, Object.BlackDoor, Object.None, Object.Wall, Object.Wall, Object.None, Object.GreenDoor, Object.None, Object.None],
        [Object.GreenKey, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.BlueKey]
    ],
    playerStartPosition: {
        xPosition: 4,
        yPosition: 0
    },
    completionTime: 20
};

const level8 = {
    number: 8,
    maze: [
        [Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.None, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.BlackDoor, Object.Exit, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Hammer],
        [Object.None, Object.None, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.None, Object.Wall, Object.Wall],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None],
        [Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None, Object.BlackKeyChest],
        [Object.Player, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 9
    },
    completionTime: 12
};

const level9 = {
    number: 9,
    maze: [
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.Hammer, Object.Wall, Object.None, Object.Wall, Object.None, Object.None, Object.Wall, Object.None, Object.Player],
        [Object.Wall, Object.Wall, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.Wall, Object.Wall, Object.BlueDoor, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.BlueKeyChest, Object.Wall, Object.None, Object.Wall, Object.None, Object.Exit, Object.GreenDoor, Object.None, Object.Wall, Object.GreenKeyChest]
    ],
    playerStartPosition: {
        xPosition: 9,
        yPosition: 1
    },
    completionTime: 17
};

export const levels = {
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    total: 9
};

/*
    Empty Maze:

    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
    [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None]
*/