export default class Player {
  constructor(gameSize) {
    this.gameWidth = gameSize.width;
    this.gameHeight = gameSize.height;
    this.sprite = {
      spriteSheet: document.getElementById("spritesheet"),
      positionX: 0,
      positionY: 0,
    };
    this.size = {
      width: 200,
      height: 200,
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
    /*
    Image Source,
    Cropping rectangle start X
    Cropping rectangle start Y
    Cropping rectangle size,
    Rectangle draw position
    Rectangle draw size
    */
    ctx.drawImage(
      this.sprite.spriteSheet,
      this.size.width * this.sprite.positionX,
      this.size.height * this.sprite.positionY,
      this.size.width,
      this.size.height,
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
