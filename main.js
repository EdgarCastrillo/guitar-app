'use strict'

function main() {
    var mainElement = document.querySelector('#site-main');
    var gameSong = new Audio('song/jet-are-you-gonna-be-my-girl.m4a');

    function buildDom(html) {
        mainElement.innerHTML = html;
        return mainElement;
    };

    function createSplashScreen() {
        var splashScreen = buildDom(`
          <section id="intro">
            <h1>Guitar Hero</h1>
            <button class="btn-start">START GAME</button>
            <button class="btn-instructions">INSTRUCTIONS</button>
          </section>
        `);
        var startButton = document.querySelector('.btn-start');
        startButton.addEventListener('click', createGameScreen);
        var instructionsButton = document.querySelector('.btn-instructions');
        instructionsButton.addEventListener('click', createInstructionsScreen);
    };

    function createInstructionsScreen() {
        var instructionScreen = buildDom(`
        <section id="intro">
          <h2>Instructions</h2>
          <img src="./image/btn-1.png"/>
          <img src="./image/btn-2.png"/>
          <img src="./image/btn-3.png"/>
          <button class="Button">START GAME</button>
        </section>
      `);
        var startButton = document.querySelector('button');
        startButton.addEventListener('click', createGameScreen);
    };



    function createGameScreen() {
        gameSong.play();

        var gameScreen = buildDom(`
          <section class= "score-section">
            <p id="global-score">Score: 0</p>
            <p id="countdown">Time: 0</p>
          </section>
          <section class= "canvas-section">
            <canvas width=500px height= 650px>
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
                gameInstance.player.isPush = true;
                gameInstance.checkCollisions(gameInstance.player);
            };
            if (event.key === 'ArrowDown') {
                gameInstance.player2.isPush = true;
                gameInstance.checkCollisions(gameInstance.player2);
            };
            if (event.key === 'ArrowRight') {
                gameInstance.player3.isPush = true;
                gameInstance.checkCollisions(gameInstance.player3);
            };
            if (event.key === 'p') {
                alert("Pause");
            }
        });
        document.addEventListener('keyup', function(event) {
            gameInstance.player.isPush = false;
            gameInstance.player2.isPush = false;
            gameInstance.player3.isPush = false;
        });

        //setTimeout(createGameOverScreen, 3000);
    };

    function createGameOverScreen(score) {
        gameSong.pause();
        var gameOverScreen = buildDom(`
          <section id="intro">
            <h1>Game Over</h1>
            <p class="score">Score:</p>
            <button class="btn-start">Restart</>
          </section>
    `);
        var restartButton = document.querySelector('button');
        document.querySelector('.score').innerHTML = score;
        restartButton.addEventListener('click', createGameScreen);
    };

    createSplashScreen();
};

window.addEventListener('load', main);