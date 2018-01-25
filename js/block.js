function Bloque(x, y, sX, sY, size) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.size = size;
    this.width = 15;
    this.height = 100;

    this.element = $('<div>').attr('class', "bloque");
    this.element.css({ top: this.y, left: this.x, width: 15, height: 100, position: 'absolute' });
    $('.fondo').append(this.element);
}

Bloque.prototype.render = function () {
    this.element.css({ top: this.y, left: this.x })
}

Bloque.prototype.move = function () {

    if (this.y >= $(".fondo").height() - 100 || this.y <= 0) {
        this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
}