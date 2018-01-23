
function Jugador(x, y, speed){
  this.x= x;
  this.y=y;
  this.speed=speed;
  this.element= $("<div>").attr("class", "jugador");
  this.element.css({bottom:this.y, left:this.x});
  $(".fondo").append(this.element);
}

Jugador.prototype.moveup = function(){
  this.y += this.speed;
}
Jugador.prototype.movedown = function(){
  this.y -= this.speed;
}

Jugador.prototype.render = function(){
  this.element.css({bottom: this.y})
}



