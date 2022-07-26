import GameController from "./models/game.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("runner--game--canvas");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const game = new GameController(canvas);
  game.startGameLoop();
});
