export default class Player {
  constructor(gameSize) {
    this.gameWidth = gameSize.width;
    this.gameHeight = gameSize.height;
    this.position = {
      x: 50,
      y: 50,
    };
    this.size = {
      width: 32,
      height: 32,
    };
    this.velocity = {
      x: 1,
      y: 1,
    };
    this.weight = 1;
  }
  update(gameEnvironment, controls) {
    this.updatePosition(controls);
  }
  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  updatePosition(controls) {
    if (controls.keys.down) {
      this.moveDown();
    }
    if (controls.keys.left) {
      if (controls.keys.right) return;
      this.moveLeft();
    }
    if (controls.keys.right) {
      if (controls.keys.left) return;
      this.moveRight();
    }
  }
  moveDown() {
    if (this.isOnBottomOfCanvas()) {
      return;
    } else {
      this.position.y += this.velocity.y;
    }
  }
  moveLeft() {
    this.position.x -= this.velocity.x;
  }
  moveRight() {
    this.position.x += this.velocity.x;
  }
  isOnBottomOfCanvas() {
    if (this.position.y >= this.gameHeight - this.size.height) {
      return true;
    } else {
      return false;
    }
  }
}
