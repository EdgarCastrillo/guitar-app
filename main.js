'use strict'

function main() {
    var mainElement = document.querySelector('#site-main');

    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;
    };

    function createSplashScreen() {
        var splashScreen = buildDom(`
          <section>
            <h1>Guitar Edgar</h1>
            <button>START GAME</button>
          </section>
        `);
        var startButton = document.querySelector('button');
        startButton.addEventListener('click', createGameScreen);
    };

    function createGameScreen() {
        var gameScreen = buildDom(`
          <section>
            <canvas width=400px height= 400px></canvas>
          </section>
        `);
        var canvasElement = document.querySelector('canvas');
        //var gameInstance = new game(canvasElement);
        setTimeout(createGameOverScreen, 3000);
    };

    function createGameOverScreen() {
        var gameOverScreen = buildDom(`
          <section>
            <h1>Game Over</h1>
            <button>Restart</>
          </section>
    `);
        var restartButton = document.querySelector('button');
        restartButton.addEventListener('click', createGameScreen);
    };

    createSplashScreen();
};

window.addEventListener('load', main);
8