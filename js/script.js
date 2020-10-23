(() => {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function () {
        generarApartados();
        
    });
})();

function generarApartados() {
    var cuerpo = document.getElementsByTagName("body")[0];
    var contenedorInicial = document.createElement("div");
    var contenedor1 = document.createElement("div");
    var contenedor2 = document.createElement("div");
    var contenedor3 = document.createElement("div");
    contenedorInicial.id="divInicial";
    contenedor1.id="contenedor1";
    contenedor2.id="contenedor2";
    contenedor3.id="contenedor3";
    contenedorInicial.appendChild(contenedor1);
    contenedorInicial.appendChild(contenedor2);
    contenedorInicial.appendChild(contenedor3);
    cuerpo.appendChild(contenedorInicial);
    for (let index = 0; index < 3; index++) {
        var ulCuadrados = document.createElement("ul");
        ulCuadrados.className="cuadrados";
        if (index == 0) {
            contenedor1.appendChild(ulCuadrados);
        } else if (index == 0) {
            contenedor2.appendChild(ulCuadrados);
        } else {
            contenedor3.appendChild(ulCuadrados);
        }
        for (let i = 0; i < 10; i++) {
            var li = document.createElement("li");
            ulCuadrados.appendChild(li);
        }
        
        
    }
    
}