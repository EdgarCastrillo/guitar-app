# Project's name
Guitar app
## Description
Esta aplicación se basa en el clasico juego Guitar Hero. El juego consta de 3 pantallas, en la primera pantalla del juego podemos ver el titulo del juego y el botón "Start Game", con el que accedemos a la siguiente pantalla. A continuación empezará a sonar una canción y a caer puas de guitarra. En el momento que las puas de guitarra esten tocando la zona determinada deberemos apretar al botón que correspondan. Si apretamos al botón mientras la pua está tocando la zona determinada ganaremos 10 puntos. Si apretamos el botón y no está en la zona determinada nos restará 4 puntos.

La duración del juego será equivalente al tiempo que dura la canción que se reproduce.

Automaticamente al acabar la canción aparecerá la tercera pantalla, la de Game Over. Tendremos un botón para resetear el juego y volver a jugar otra partida.


## MVP Canvas
- 3 pantallas: Start Game / Game / Game Over
- Funciones constructoras: Player / GuitarPicks / Game
- Metodos: GuitarPicks / Player / Game
- Score
- Time


## Backlog
- Diferent value points
- Local storage

## Data structure
Player
  - this.x
  - this.y
  - this.color
  - this.width
  - this.height
  - this.totalPoints

  GuitarPicks
  - this.x
  - this.y
  - this.color
  - this.width
  - this.height
  - this.points (valor)
  - this.direction
  - this.velocity

  Game
  - this.player
  - this.guitarPicks
  - this.gameOver


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen: Pantalla inicial con logo del juego y botón Start Game.
- gameScreen: Pantalla del juego donde aparece una guitarra, la puntuación que vamos consiguiendo y el tiempo que nos queda para acabar la partida.
- gameoverScreen: Pantalla final donde se muestra el resultado de la partida y el botón Restart Game para empezar una nueva partida.


## Task
(https://github.com/EdgarCastrillo/guitar-app/blob/master/IMG_3628.JPG)


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/EdgarCastrillo/guitar-app)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
