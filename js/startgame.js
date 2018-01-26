window.onload = function () {
    document.getElementById("start").onclick = function () {
        $(".stargame").hide();
        $(".container").show();
        $("button").hide();
        $("h1").hide();
        $(".fondo").show();
    };
}