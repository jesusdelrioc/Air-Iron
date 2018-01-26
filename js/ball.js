function Pelota(x, y, sX, sY, size) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.speedX = sX;
    this.speedY = sY;
    this.size = size;

    this.element = $('<div>').attr('class', "pelota");
    this.element.css({ top: this.y, left: this.x, width: 40, height: 40 });
    $('.fondo').append(this.element);
}

Pelota.prototype.render = function () {
    this.element.css({ top: this.y })
}

Pelota.prototype.switchDirection = function () {
    this.speedX *= -1;
}

Pelota.prototype.move = function () {

    if (this.x >= $(".fondo").width() - 40 || this.x <= 0) {
        this.switchDirection()
        // alert("game over");
    }
    if (this.y >= $(".fondo").height() - 40 || this.y <= 0) {
        this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
    this.element.css({ top: this.y, left: this.x });
}