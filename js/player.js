
var fps = 60;

function Cubo(maxSpeed,x,y){
    this.maxSpeed = maxSpeed;
    this.pos = {X:x, Y:y}
    this.speed = 0;
    this.el = $('<div>').addClass('cubo');
    $('body').append(this.el);
}
Cubo.prototype.move = function(direction){
   this.speed = this.maxSpeed * direction;
}
Cubo.prototype.stop = function(){
    this.speed = 0;
}
Cubo.prototype.render = function(){
   this.pos.Y += this.speed/fps;
   this.el.css({top:this.pos.Y,left:this.pos.X});
}

var arr = [
  new Cubo(800,200,100)];

setInterval(function(){
  arr.forEach(function(c){
    c.render();
  })
}, 1000/fps);
 
$("body").keydown(function(e){
  switch(e.keyCode){
      case 65: // izquierda
        arr.forEach(function(c){
          c.move(-1)
        })
      break;
      case 68: // derecha
        arr.forEach(function(c){
          c.move(1)
        })
      break;
  }
});

$("body").keyup(function(e){
  arr.forEach(function(c){
    c.stop();
  });
});

