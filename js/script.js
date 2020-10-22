(() => {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function () {
        generarApartados();
        
    });
})();

function generarApartados() {
    var cuerpo = document.getElementsByTagName("body")[0];
    var parrafo=document.createElement("h1");
    parrafo.id="titular";
    var contenedor1 = document.createElement("div")
    contenedor1.id="divBody";
    var contenido=document.createTextNode("LusiDrola, tu web de energías renovables, al mejor precio");
    parrafo.appendChild(contenido);
    contenedor1.appendChild(parrafo);
    cuerpo.appendChild(contenedor1);
}
