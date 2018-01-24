
function Pelota(x, y, sX, sY, size) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.size = size;
    this.element = $('<div>').attr('id', "pelota");
    this.element.css({ top: this.y, left: this.x, position: 'absolute' });
    $('#fondo').append(this.element);
}

Pelota.prototype.render = function () {
    this.element.css({ top: this.y, left: this.x })
}

Pelota.prototype.move = function () {

    if (this.x >= $("#fondo").width() -40|| this.x <= 0) {
        this.speedX *= -1;
    }
    if (this.y >= $("#fondo").height() -40|| this.y <= 0) {
        this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
}