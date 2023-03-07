export function renderMaze() {
    const editMazeContainer = document.getElementById('editMaze');
    const numberOfRows = 10;
    const numberOfCells = 10;

    for (let row = 1; row <= numberOfRows; row++) {
        addRowToMaze(editMazeContainer, numberOfCells);
    }
}

function addCellToRow(row) {
    let cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');

    cellDiv.addEventListener('click', toggleWall);
    row.appendChild(cellDiv);
}

function addRowToMaze(maze, numberOfCells) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let cell = 1; cell <= numberOfCells; cell++)
        addCellToRow(rowDiv);
    maze.appendChild(rowDiv);
}

function toggleWall(event) {
    const cell = event.srcElement;

    if (cell.classList.contains('wall'))
        cell.classList.remove('wall');
    else
        cell.classList.add('wall');
}