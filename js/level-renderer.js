import { Cell, ItemToIconClasses } from './enums.js';

export function renderItems(items) {
    const itemsContainer = document.getElementsByClassName('items')[0];

    if (!items?.length) {
        itemsContainer.innerHTML = '';
        return;
    }

    for (let item of items) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemIcon = document.createElement('i');
        itemIcon.classList.add('item');
        for (let className of ItemToIconClasses[item])
            itemIcon.classList.add(className);

        itemContainer.appendChild(itemIcon);
        itemsContainer.appendChild(itemContainer);
    }
}

export function renderLevel(level) {
    renderLevelNumber(level.number);
    renderMaze(level.maze);
    renderItems(null);
}

function renderLevelNumber(levelNumber) {
    const levelElement = document.getElementById('level');
    levelElement.innerText = `Level ${levelNumber}`;
}

function renderMaze(maze) {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = '';
    for (let row of maze)
        addRowToMaze(mazeElement, row);
}

function addCellToRow(row, cell) {
    let cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');

    if (cell !== Cell.Empty && cell !== Cell.Wall) {
        const object = createObject(cell);
        if (object !== null)
            cellDiv.appendChild(object);
    } else if (cell === Cell.Wall)
        cellDiv.classList.add('wall');

    row.appendChild(cellDiv);
}

function addRowToMaze(maze, row) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let cell of row)
        addCellToRow(rowDiv, cell);
    maze.appendChild(rowDiv);
}

function createObject(cell) {
    if (cell === Cell.Player) {
        const player = document.createElement('i');
        player.classList.add('fa-solid', 'fa-person');
        player.setAttribute('id', 'player');
        return player;
    } else if (cell === Cell.Exit) {
        const exit = document.createElement('span');
        exit.classList.add('exit-text');
        exit.innerText = 'EXIT';
        return exit;
    } else if (cell === Cell.BlackKey) {
        const blackKey = document.createElement('i');
        blackKey.classList.add('fa-solid', 'fa-key', 'black-key');
        return blackKey;
    } else if (cell === Cell.BlackDoor) {
        const blackDoor = document.createElement('div');
        blackDoor.classList.add('door', 'black-door');

        const lock = document.createElement('i');
        lock.classList.add('fa-solid', 'fa-lock', 'black-door-lock');
        blackDoor.appendChild(lock);

        return blackDoor;
    }

    return null;
}