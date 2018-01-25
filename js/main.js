$(document).ready(function () {

    var size = { width: 1000, height: 600 };


    var jugador = new Jugador(80, 400, 25, [65, 90], size);
    var jugador1 = new Jugador(900, 100, 25, [38, 40], size);
    var pelota = new Pelota(500, 300, 7, 7, size);
    var bloque = new Bloque(500, 150, 0, 15, size);


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




    function checkCollision() {
        if (jugador.x < pelota.x + pelota.width &&
            jugador.x + jugador.width > pelota.x &&
            jugador.y < pelota.y + pelota.height &&
            jugador.y + jugador.height > pelota.y) {
            pelota.switchDirection();
        }

        if (jugador1.x < pelota.x + pelota.width &&
            jugador1.x + jugador1.width > pelota.x &&
            jugador1.y < pelota.y + pelota.height &&
            jugador1.y + jugador1.height > pelota.y) {
            pelota.switchDirection();
        }
    
        if (bloque.x < pelota.x + pelota.width && 
            bloque.x + bloque.width > pelota.x && 
            bloque.y < pelota.y + pelota.height &&
            bloque.y + bloque.height > pelota.y) {
            pelota.switchDirection();
        }

    }


});





