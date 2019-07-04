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
            <h1>Guitar</h1>
            <button>START GAME</button>
          </section>
        `);
        var startButton = document.querySelector('button');
        startButton.addEventListener('click', createGameScreen);
    };

    function createGameScreen() {
        var gameSong = new Audio('song/jet-are-you-gonna-be-my-girl.mp3');
        gameSong.play();

        var gameScreen = buildDom(`
          <section>
            <p id=global-score>Score: 0</p>
            <p id=counterdown>Time: 0</p>
          </section>
          <section>
            <canvas width=500px height= 500px></canvas>
          </section>
        `);
        var canvasElement = document.querySelector('canvas');
        var gameInstance = new Game(canvasElement);

        gameInstance.gameOverCallback(createGameOverScreen);
        gameInstance.startGame();

        document.addEventListener('keydown', function(event) {
            console.log(event);
            if (event.key === 'ArrowLeft') {
                gameInstance.checkCollisions(gameInstance.player);
            };
            if (event.key === 'ArrowDown') {
                gameInstance.checkCollisions(gameInstance.player2);
            };
            if (event.key === 'ArrowRight') {
                gameInstance.checkCollisions(gameInstance.player3);
            };
        });

        //setTimeout(createGameOverScreen, 3000);
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