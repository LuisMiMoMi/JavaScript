export{Generador};
class Generador{
    main() {
        let body = document.getElementsByTagName("body")[0];
    
        let contenedorInicial = document.createElement("div");
    
        let contenedor1 = document.createElement("div");
            let h2 = document.createElement("h2");
            let texto = document.createTextNode("Las placas solares son el futuro:");
            let fotoPlaca = document.createElement("img");
    
        let contenedor2 = document.createElement("div");
    
        let contenedor3 = document.createElement("div");
    
        let contenedorLogin = document.createElement("div");
            let imagenLogin = document.createElement("img");
    
        contenedorInicial.id="contenido";
    
        contenedor1.id="contenedor1";
            fotoPlaca.id="placaSolar";
            fotoPlaca.src="../img/placaSolar.jpg";
    
        contenedor2.id="contenedor2";
    
        contenedor3.id="contenedor3";
    
        contenedorLogin.id="login-button";
            imagenLogin.src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png";
            imagenLogin.id="imagen-login";
    
        body.appendChild(contenedorInicial);
    
        contenedorInicial.appendChild(contenedor1);
            contenedor1.appendChild(h2);
                h2.appendChild(texto);
                contenedor1.appendChild(fotoPlaca);
        contenedorInicial.appendChild(contenedor2);
        contenedorInicial.appendChild(contenedor3);
        contenedorInicial.appendChild(contenedorLogin);
            contenedorLogin.appendChild(imagenLogin);
    }
    
    main2() {
        let body = document.getElementsByTagName("body")[0];

        let contenedor1grande = document.createElement("div");
            let imagenFlecha = document.createElement("img");

        let imagenLogin = document.getElementById("imagen-login");

        contenedor1grande.id="contenedor1grande";
            imagenFlecha.src="../img/flecha.png";
            imagenFlecha.id="flecha";

        imagenLogin.src="";

        body.appendChild(contenedor1grande);

        contenedor1grande.appendChild(imagenFlecha);
    
        //eventos logeado
        $("#contenedor1").click(function(){
            $('#contenido').fadeOut("slow",function(){
              $("#contenedor1grande").fadeIn();
            });
        });
        $("#flecha").click(function(){
            $('#contenedor1grande').fadeOut("slow",function(){
              $("#contenido").fadeIn();
            });
        });
    }
}
