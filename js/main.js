var miJugador
var miJugador1
$(document).ready(function () {
    miJugador = new Jugador(50, 250, 15);
    miJugador1 = new Jugador(870, 250, 20)

    $(document).keydown(function (e) {
        switch (e.keyCode) {
            case 65:
                miJugador.moveup();
                break;

            case 90:
                miJugador.movedown();
                break;

            case 38:
                miJugador1.moveup();
                break;

            case 40:
                miJugador1.movedown();
                break;

        }
        setInterval(update, 1000/ 60)

    })
});

function update() {
    miJugador.render();
    miJugador1.render();

}


