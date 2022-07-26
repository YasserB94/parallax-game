export class Layer {
  constructor(image, speedMod, gameSize, gameSpeed) {
    this.image = image;
    this.speedMod = speedMod;
    this.gameSize = gameSize;
    this.size = {
      width: gameSize.width,
      height: gameSize.height,
    };
    this.position = {
      x: 0,
      x2: this.size.width,
      y: 0,
    };

    this.speed = gameSpeed * this.speedMod;
  }
  update(gameSpeed) {
    this.speed = gameSpeed * this.speedMod;
    if (this.position.x <= -this.size.width) {
      this.position.x = this.size.width + this.position.x - this.speed;
    }
    if (this.position.x2 <= -this.size.width) {
      this.position.x2 = this.size.width + this.position.x - this.speed;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    ctx.drawImage(
      this.image,
      this.position.x2,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}
