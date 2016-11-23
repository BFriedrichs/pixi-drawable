
var GraphicsObject = function() {
  PIXI.Graphics.call(this);

  this.filled = false;
  this.color = 0x000;
  this.lineThickness = 1;
}

GraphicsObject.prototype = Object.create(PIXI.Graphics.prototype);
GraphicsObject.prototype.constructor = GraphicsObject;
module.exports = GraphicsObject;

GraphicsObject.prototype.render = function() {
  if(this.draw) {
      this.draw();
  }
  for(var i in this.children) {
    this.children[i].render();
  }
};
