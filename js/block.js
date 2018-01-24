function Bloque(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.element = $('<div>').attr('id', "bloque");
    this.element.css({ top: this.y, left: this.x, position: 'absolute' });
    $('#fondo').append(this.element);
}

Bloque.prototype.render = function () {
    this.element.css({ top: this.y})
}

Bloque.prototype.move = function () {

    if (this.y >= $("#fondo").height()|| this.y <= 0) {
        this.speed *= -1;
    }

    this.y += this.speed;
}