$(document).ready(function () {

    var size = { width: 1000, height: 600 };


    var jugador = new Jugador(80, 400, 25, [65, 90], size);
    var jugador1 = new Jugador(900, 100, 25, [38, 40], size);
    var pelota = new Pelota(500, 300, 10, 10, size)


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
    }
});




