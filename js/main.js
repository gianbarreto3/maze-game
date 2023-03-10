import { Game } from "./game.js";
import { renderMaze } from "./editor.js";

const game = new Game();
const gameContainer = document.getElementsByClassName('game-container')[0];
const gameOverScreen = document.getElementById('gameOverScreen');
const howToPlayMenu = document.getElementById('howToPlayMenu');
const levelCompleteMenu = document.getElementById('levelCompleteMenu');
const levelContainer = document.getElementsByClassName('level-container')[0];
const mainMenu = document.getElementById('mainMenu');
const nextLevelButton = document.getElementById('nextLevelButton');
const editor = document.getElementById('editor');

function initializeGame() {
    mainMenu.style.display = 'none';
    levelContainer.style.display = 'block';
    gameContainer.style.display = 'block';

    game.initialize();
}

function handleHowToPlayOptionClick() {
    mainMenu.style.display = 'none';
    howToPlayMenu.style.display = 'block';
}

function handleHowToPlayMenuBackButtonClick() {
    howToPlayMenu.style.display = 'none';
    mainMenu.style.display = 'block';
}

function handleHomeButtonClick() {
    game.endTimer();
    levelContainer.style.display = 'none';
    gameContainer.style.display = 'flex';
    mainMenu.style.display = 'block';
}

function handleMainMenuButtonClick() {
    levelCompleteMenu.style.display = 'none';
    mainMenu.style.display = 'block';
    nextLevelButton.style.display = 'block';
    gameContainer.style.display = 'flex';
}

function handleNextLevelButtonClick() {
    levelCompleteMenu.style.display = 'none';
    levelContainer.style.display = 'block';
    gameContainer.style.display = 'block';

    game.loadNextLevel();
}

function handleEditorOptionClick() {
    mainMenu.style.display = 'none';
    editor.style.display = 'block';

    renderMaze();
}

function handleGameOverMainMenuButtonClick() {
    gameOverScreen.style.display = 'none';
    mainMenu.style.display = 'block';
}

function handleRestartLevelButtonClick() {
    gameOverScreen.style.display = 'none';
    levelContainer.style.display = 'block';
    gameContainer.style.display = 'block';

    game.restartLevel();
}

(() => {
    const playGameOption = document.getElementById('playGame');
    playGameOption.addEventListener('click', initializeGame);

    const howToPlayOption = document.getElementById('howToPlayOption');
    howToPlayOption.addEventListener('click', handleHowToPlayOptionClick);

    const editorOption = document.getElementById('editorOption');
    editorOption.addEventListener('click', handleEditorOptionClick);

    const howToPlayMenuBackButton = document.getElementById('howToPlayMenuBackButton');
    howToPlayMenuBackButton.addEventListener('click', handleHowToPlayMenuBackButtonClick);

    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', handleHomeButtonClick);

    const mainMenuButton = document.getElementById('mainMenuButton');
    mainMenuButton.addEventListener('click', handleMainMenuButtonClick);

    nextLevelButton.addEventListener('click', handleNextLevelButtonClick);

    const gameOverMainMenuButton = document.getElementById('gameOverMainMenuButton');
    gameOverMainMenuButton.addEventListener('click', handleGameOverMainMenuButtonClick);

    const restartLevelButton = document.getElementById('restartLevelButton');
    restartLevelButton.addEventListener('click', handleRestartLevelButtonClick);
})();