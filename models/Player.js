export default class Player {
  constructor(gameSize) {
    this.gameWidth = gameSize.width;
    this.gameHeight = gameSize.height;
    this.size = {
      width: 32,
      height: 32,
    };
    this.position = {
      x: this.gameWidth / 10,
      y: this.gameHeight - this.size.height,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.weight = 1;
    this.state = {
      airborn: false,
    };
  }
  update(gameEnvironment, controls) {
    this.updateVelocity(controls);
    this.updatePosition(gameEnvironment);
  }
  updatePosition(gameEnvironment) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x = 0;
    this.applyGravity(gameEnvironment.gravity);
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
  updateVelocity(controls) {
    // this.velocity.x = 0;
    // this.velocity.y = 0;
    for (const key in controls.keys) {
      if (Object.hasOwnProperty.call(controls.keys, key)) {
        const value = controls.keys[key];
        if (key === "up" && value === true) {
          this.jump();
          continue;
        }
        if (key === "down" && value === true) {
          this.velocity.y = 1;
          continue;
        }
        if (key === "left" && value === true) {
          this.velocity.x = -1;
          continue;
        }
        if (key === "right" && value === true) {
          this.velocity.x = 1;
          continue;
        }
      }
    }
  }
  jump() {
    if (!this.isOnBottomOfCanvas()) return;
    this.velocity.y -= 20;
  }
  applyGravity(gravity) {
    if (!this.isOnBottomOfCanvas()) {
      this.velocity.y += gravity * this.weight;
    } else {
      this.velocity.y = 0;
    }
  }
  isOnBottomOfCanvas() {
    if (this.position.y + this.size.height >= this.gameHeight) {
      return true;
    } else {
      return false;
    }
  }
}
