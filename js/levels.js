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
    completionTime: 5
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
    completionTime: 5
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
    completionTime: 18
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
    completionTime: 10
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
        [Object.None, Object.Wall, Object.None, Object.Wall, Object.Exit, Object.None, Object.Wall, Object.None, Object.Wall, Object.None],
        [Object.BlueKeyChest, Object.Wall, Object.None, Object.Wall, Object.None, Object.None, Object.GreenDoor, Object.None, Object.Wall, Object.GreenKeyChest]
    ],
    playerStartPosition: {
        xPosition: 9,
        yPosition: 1
    },
    completionTime: 15
};

const level10 = {
    number: 10,
    maze: [
        [Object.Player, Object.Wall, Object.Wall, Object.Wall, Object.BlueButton, Object.Wall, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.GreenButton],
        [Object.BluePanel, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall],
        [Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Wall, Object.None, Object.None, Object.None],
        [Object.None, Object.Wall, Object.None, Object.None, Object.Wall, Object.GreenPanel, Object.Wall, Object.None, Object.None, Object.None],
        [Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.Wall, Object.RedPanel, Object.Wall],
        [Object.None, Object.Crate, Object.None, Object.None, Object.None, Object.None, Object.RedButtonReset, Object.Wall, Object.None, Object.Exit]
    ],
    playerStartPosition: {
        xPosition: 0,
        yPosition: 0
    },
    completionTime: 12
};

const level11 = {
    number: 11,
    maze: [
        [Object.Hammer, Object.None, Object.None, Object.None, Object.Wall, Object.Wall, Object.None, Object.None, Object.None, Object.Exit],
        [Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall, Object.Wall, Object.BlackDoor, Object.Wall, Object.Wall, Object.Wall],
        [Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall],
        [Object.Wall, Object.None, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.RGBPanel, Object.Wall, Object.BlueDoor, Object.Wall],
        [Object.Wall, Object.None, Object.Wall, Object.RGBButtonGreen, Object.None, Object.None, Object.Player, Object.Wall, Object.None, Object.Wall],
        [Object.Wall, Object.None, Object.Wall, Object.None, Object.None, Object.None, Object.None, Object.Wall, Object.None, Object.Wall],
        [Object.Wall, Object.BlueKey, Object.Wall, Object.RGBButtonRed, Object.None, Object.None, Object.RGBButtonBlue, Object.Wall, Object.None, Object.Wall],
        [Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.None, Object.Wall],
        [Object.Wall, Object.BlackKeyChest, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.Wall],
        [Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall, Object.Wall]
    ],
    playerStartPosition: {
        xPosition: 6,
        yPosition: 4
    },
    completionTime: 18
};

const level12 = {
    number: 12,
    maze: [
        [Object.Player, Object.InvisibleWall, Object.InvisibleWall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.None, Object.None, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None],
        [Object.None, Object.InvisibleWall, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None],
        [Object.None, Object.InvisibleWall, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None],
        [Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.None],
        [Object.None, Object.None, Object.InvisibleWall, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.None],
        [Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall, Object.InvisibleWall],
        [Object.None, Object.InvisibleWall, Object.InvisibleWall, Object.None, Object.InvisibleWall, Object.None, Object.None, Object.None, Object.InvisibleWall, Object.None],
        [Object.None, Object.None, Object.None, Object.None, Object.None, Object.None, Object.InvisibleWall, Object.None, Object.None, Object.Exit]
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
    level6,
    level7,
    level8,
    level9,
    level10,
    level11,
    level12,
    total: 12
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