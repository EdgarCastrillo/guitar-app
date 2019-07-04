'use strict'

function main() {
    var mainElement = document.querySelector('#site-main');
    var gameSong = new Audio('song/jet-are-you-gonna-be-my-girl.mp3');

    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;
    };

    function createSplashScreen() {
        var splashScreen = buildDom(`
          <section id="intro">
            <h1>Guitar</h1>
            <button class="Button">START GAME</button>
          </section>
        `);
        var startButton = document.querySelector('button');
        startButton.addEventListener('click', createGameScreen);
    };

    function createGameScreen() {
        gameSong.play();

        var gameScreen = buildDom(`
          <section>
            <p id="global-score">Score: 0</p>
            <p id="countdown">Time: 0</p>
          </section>
          <section>
            <canvas width=600px height= 600px>
            </canvas>
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

    function createGameOverScreen(score) {
        gameSong.pause();
        var gameOverScreen = buildDom(`
          <section>
            <h1>Game Over</h1>
            <p class="score"></p>
            <button class="Button">Restart</>
          </section>
    `);
        var restartButton = document.querySelector('button');
        document.querySelector('.score').innerHTML = score;
        restartButton.addEventListener('click', createGameScreen);
    };

    createSplashScreen();
};

window.addEventListener('load', main);