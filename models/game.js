import InputHandler from "./InputHandler.js";
import Player from "./Player.js";
class Game {
  constructor(canvas, InputHandler) {
    this.canvas = canvas;
    this.inputHandler = InputHandler;
    this.size = {
      width: this.canvas.width,
      height: this.canvas.height,
    };
    this.ctx = canvas.getContext("2d");
    this.environment = {
      gravity: 0.5,
      speed: 60,
      playerMoveMentBoundaryLeft: this.size.width / 10,
      playerMoveMentBoundaryRight: this.size.width / 3,
    };
    this.init();
  }
  init() {
    this.player = new Player(this.size);
    this.player.setMovementBoundaries(
      this.environment.playerMoveMentBoundaryLeft,
      this.environment.playerMoveMentBoundaryRight
    );
  }
  update() {
    console.log(`Bound:${this.environment.playerMoveMentBoundaryLeft}`);
    this.player.update(this.environment, this.inputHandler);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    this.player.draw(this.ctx);
  }
}
export default class GameController {
  constructor(canvas) {
    this.InputHandler = new InputHandler();
    this.game = new Game(canvas, this.InputHandler);
    this.startGameLoop();
  }
  startGameLoop() {
    //Wrapped in Arrow Function to resolve scope issues
    window.requestAnimationFrame((timeStamp) => {
      this.gameLoop(timeStamp);
    });
  }
  gameLoop(timeStamp) {
    this.game.update();
    this.game.draw();
    //Wrapped in Arrow Function to resolve scope issues
    window.requestAnimationFrame((timeStamp) => {
      this.gameLoop(timeStamp);
    });
  }
}
