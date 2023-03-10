export function renderItems(items) {
    const itemsContainer = document.getElementsByClassName('items')[0];
    itemsContainer.innerHTML = '';

    for (let item of items) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        const itemIcon = item.createSprite();

        itemContainer.appendChild(itemIcon);
        itemsContainer.appendChild(itemContainer);
    }
}

export function renderLevel(levelNumber, mazeBoard) {
    renderLevelNumber(levelNumber);
    renderMaze(mazeBoard);
    renderItems([]);
}

function renderLevelNumber(levelNumber) {
    const levelElement = document.getElementById('level');
    levelElement.innerText = `Level ${levelNumber}`;
}

function renderMaze(mazeBoard) {
    const mazeElement = document.getElementById('maze');
    mazeElement.innerHTML = '';
    for (let row of mazeBoard)
        addRowToMaze(mazeElement, row);
}

function addCellToRow(row, cell) {
    let cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');

    if (!cell.isEmpty()) {
        const sprite = cell.sprite.createSprite();
        cellDiv.appendChild(sprite);
    }

    row.appendChild(cellDiv);
}

function addRowToMaze(maze, row) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let cell of row)
        addCellToRow(rowDiv, cell);
    maze.appendChild(rowDiv);
}