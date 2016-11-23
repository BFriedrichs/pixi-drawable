var GraphicsObject = require('../GraphicsObject');

var Circle = function() {
  GraphicsObject.call(this);
  this.radius = 10;

  this.draw = function() {
    this.clear();
    if(this.filled) {
      this.beginFill(this.color);
    } else {
      this.lineStyle(this.lineThickness, this.color);
    }
    this.drawCircle(this.x, this.y, this.radius);
    this.endFill();
  };
};

Circle.prototype = Object.create(PIXI.Graphics.prototype);
Circle.prototype.constructor = Circle;
module.exports = Circle;