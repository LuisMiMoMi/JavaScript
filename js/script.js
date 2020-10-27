(() => {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function () {
        login();
        generarApartados();
      });
})();

function login() {
  $('#login-button').click(function(){
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
      TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
  });
  $(".close-btn").click(function(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });
  $("a[href^=\"#\"]").click(function () {
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });
}
function generarApartados() {
 var contenedorInicial = document.getElementById("contenido");
  var contenedor1 = document.createElement("div");
  var contenedor2 = document.createElement("div");
  var contenedor3 = document.createElement("div");
  contenedor1.id="contenedor1";
  contenedor2.id="contenedor2";
  contenedor3.id="contenedor3";
  contenedorInicial.appendChild(contenedor1);
  contenedorInicial.appendChild(contenedor2);
  contenedorInicial.appendChild(contenedor3);

  
}