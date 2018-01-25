function Jugador(x, y, speed, keys, size) {
  this.x = x;
  this.y = y;
  this.height = 100;
  this.width = 20;
  this.speed = speed;
  this.keys = keys;
  this.size = size;


  this.element = $("<div>").attr("class", "jugador");
  this.element.css({ top: this.y, left: this.x,width:20,height:100 });
  $(".fondo").append(this.element);
}

Jugador.prototype.key = function (kc) {
  if (kc == this.keys[0]) {
    this.move(-1);
  } else if (kc == this.keys[1]) {
    this.move(1);
  }
}

Jugador.prototype.move = function (direction) {
  var newY = this.y + this.speed * direction;
  if (newY >= 0 && newY <= this.size.height - 80) {
    this.y = newY;
  }
};

Jugador.prototype.render = function () {
  this.element.css({ top: this.y })
}







