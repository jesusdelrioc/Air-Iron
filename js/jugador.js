// function Jugador() {
//     this.positionTop= 670;
//     this.positionLeft= 250;
//     }
    
//     var jugador;
    
//     Jugador.prototype.drawJugador = function () {
//        jugador = document.createElement("div")
//        $(".gameContainer").append(jugador);
//        $(jugador).addClass("jugador");
//        $(jugador).css({"top": this.positionTop,"left": this.positionLeft});
//     }
//     Jugador.prototype.move= function(e){
//        console.log(e.keyCode);
//        console.log(this.positionTop);
//        switch (e.keyCode) {
//            case 37: // left
//            this.positionLeft -= 5;
//              if (this.positionLeft < 0) {
//                this.positionLeft = 10;
//              }
//              break;
//            case 39: // right
//            this.positionLeft += 5;
//              if (this.positionLeft > 490) {
//                this.positionLeft = 480;
//              }
//              break;
//            default:
//              return; // exit this handler for other keys
//          }
//          this.update();
//     }
//     Jugador.prototype.update = function() {
//        $(jugador).css({"top": this.positionTop,"left": this.positionLeft});
//     }

//     console.log("hola");

function Jugador(x, y, speed){
  this.x= x;
  this.y=y;
  this.speed=speed;
  this.element= $("<div>").attr("class", "jugador");
  this.element.css({bottom:this.y, left:this.x});
  $(".fondo").append(this.element);
}

Jugador.prototype.moveup=function(){
  
}



function Jugador1(a, b, correr){
  this.a= x;
  this.b=y;
  this.correr=speed;
  this.element= $("<div>").attr("class", "jugador");
  this.element.css({bottom:this.y, left:this.x});
  $(".fondo").append(this.element);
}

Jugador.prototype.moveup=function(){
  
}
