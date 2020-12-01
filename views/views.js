export{generarApartados};
function generarApartados() {
    let body = document.getElementsByTagName("body")[0];

    let contenedorInicial = document.createElement("div");

    let contenedor1 = document.createElement("div");

    let contenedor2 = document.createElement("div");

    let contenedor3 = document.createElement("div");

    let contenedor1grande = document.createElement("div");
        let imagenFlecha = document.createElement("img");

    let contenedorLogin = document.createElement("div");
        let h1 = document.createElement("h2");
        let texto = document.createTextNode("Las placas solares son el futuro:");
        let imagenLogin = document.createElement("img");

    let fotoPlaca = document.createElement("img");

    contenedorInicial.id="contenido";

    contenedor1.id="contenedor1";
        fotoPlaca.id="placaSolar";
        fotoPlaca.src="../img/placaSolar.jpg";

    contenedor2.id="contenedor2";

    contenedor3.id="contenedor3";

    contenedor1grande.id="contenedor1grande";
        imagenFlecha.src="../img/flecha.png";
        imagenFlecha.id="flecha";

    contenedorLogin.id="login-button";
        imagenLogin.src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png";
        imagenLogin.className="imagen-login";

    body.appendChild(contenedorInicial);
    body.appendChild(contenedor1grande);

    contenedorInicial.appendChild(contenedor1);
        contenedor1.appendChild(h1);
            h1.appendChild(texto);
            contenedor1.appendChild(fotoPlaca);
    contenedorInicial.appendChild(contenedor2);
    contenedorInicial.appendChild(contenedor3);
    contenedorInicial.appendChild(contenedorLogin);
        contenedorLogin.appendChild(imagenLogin);

    contenedor1grande.appendChild(imagenFlecha);
}