function Score(x, y, name) {
    this.x = x;
    this.y = y;
    this.countUp = marcador;
    this.score=0;
    this.score1=0;
    this.element = $("<div>").attr("class","contador")
      .text(this.countUp);
    $(".fondo").append(this.element);
    
    Score.prototype.render = function() {
        this.element.css({ top: this.x, left: this.y });
      };
    }

      Score.prototype.goal1 = function() {
        $(".contador").text((this.score1 += 1));
      };
      
      Score.prototype.goal = function() {
        $(".contador1").text((this.score += 1));
      };