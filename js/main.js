$(document).ready(function () {

    var size = { width: 1000, height: 600 };


    var jugador = new Jugador(80, 400, 25, [65, 90], size);
    var jugador1 = new Jugador(900, 100, 25, [38, 40], size);
    var pelota = new Pelota(500, 300, 7, 7, size);
    var bloque = new Bloque(500, 150, 0, 15, size);
    // var colliders_selector =  " #jugador " ;
    // var obstacles_selector =  " #pelota " ;
    // var hits =  $ (colliders_selector). colisión (objects_selector)


    $(document).keydown(function (e) {
        jugador.key(e.keyCode);
        jugador1.key(e.keyCode);
    });

    setInterval(update, 1000 / 60);

    function update() {
        jugador.render();
        jugador1.render();
        pelota.render();
        pelota.move();
        bloque.move();
        bloque.render();

        checkCollision();
        
    }
    function checkCollision(){
    if (jugador.x < pelota.x + pelota.width &&
        jugador.x + jugador.width > pelota.x &&
        jugador.y < pelota.y + pelota.height && 
        jugador.y + jugador.height > pelota.y) {

        pelota.switchDirection();
    }}
    
});



        // if (pelota.x > jugador.x + jugador.width &&  pelota.x + pelota.width < jugador.x ) {
        //     pelota.pelotaColision();
        //     console.log("revota");
        //     } 
    

       // if (jugador.x + jugador.y >= jugador.x + jugador.width + )
    
    
   // }
    






