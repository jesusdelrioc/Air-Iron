function Bloque(x, y, sX, sY, size) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.size = size;
    
    this.element = $('<div>').attr('id', "bloque");
    this.element.css({ top: this.y, left: this.x, position: 'absolute' });
    $('#fondo').append(this.element);
}

Bloque.prototype.render = function () {
    this.element.css({ top: this.y, left: this.x })
}

Bloque.prototype.move = function () {

    if (this.y >= $("#fondo").height() -78|| this.y <= 0) {
        this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
}