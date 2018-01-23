var miJugador
$(document).ready(function() {
    miJugador = new Jugador(50,250,10);
    //var miJugador = new Jugador(930,250,20)

    $(document).keydown(function(e){
        switch(e.keyCode){
            case 38 :
            
            miJugador.moveup();
            break;
        
            
            case 40:
            miJugador.movedown();
            break;
        }
    
        
    
        setInterval(update, 1000/60)
        
    })
});

function update(){
    miJugador.render();

}

 
