export default class InputHandler {
  constructor() {
    this.keys = {
      up: false,
      down: false,
      left: false,
      right: false,
    };
    this.init();
  }
  init() {
    this.addKeyDownEventListeners();
    this.addKeyUpEventListeners();
  }
  addKeyDownEventListeners() {
    window.addEventListener("keydown", (e) => {
      //TODO: REFRACTOR KEYS INTO SETTINGS FOR WASD - ARROWKEYS - ZQSD
      switch (e.key) {
        case "ArrowUp" || "w" || "z":
          this.keys.up = true;
          break;
        case "ArrowDown" || "s":
          this.keys.down = true;
          break;
        case "ArrowLeft" || "a" || "q":
          this.keys.left = true;
          break;
        case "ArrowRight" || "d":
          this.keys.right = true;
          break;
      }
    });
  }
  addKeyUpEventListeners() {
    window.addEventListener("keyup", (e) => {
      //TODO: REFRACTOR KEYS INTO SETTINGS FOR WASD - ARROWKEYS - ZQSD
      switch (e.key) {
        case "ArrowUp" || "w" || "z":
          this.keys.up = false;
          break;
        case "ArrowDown" || "s":
          this.keys.down = false;
          break;
        case "ArrowLeft" || "a" || "q":
          this.keys.left = false;
          break;
        case "ArrowRight" || "d":
          this.keys.right = false;
          break;
      }
    });
  }
}
