export{Generador};
import{Galletas} from '../script.js';
class Generador{ //clases
    main() { //funciones main y main 2
        let body = document.getElementsByTagName("body")[0]; 
        //template literal
        body.innerHTML = `<div id="container">
        <h1>Registro</h1>
        <span class="close-btn">
          <img id="imagen-x" src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
        </span>
        <form id="elementoForm">
          <input type="email" name="email" id="mail" placeholder="E-mail">
          <input type="password" name="pass" id="contra" placeholder="Contraseña">
          <a class="login" href="#">Inicia sesión</a>
        </form>
        </div>`;
        //creación de nodos
        let contenedorInicial = document.createElement("div");
    
        let contenedor1 = document.createElement("div");
            let h2Cont1 = document.createElement("h2");
            let tituloCont1 = document.createTextNode("Servicio de placas solares");
            let divCont1 = document.createElement("div");
            let textoCont1 = document.createTextNode("Los paneles solares, están formados por celdas fotovoltaicas fabricadas en materiales semiconductores como el arseniuro de galio o el silicio cristalino, que permiten transformar la energía solar en energía eléctrica. Esta conversión de energía se produce gracias al efecto fotovoltaico, por el cual un electrón pasa de la celda del panel cargada negativamente hacia otra con carga positiva, generando una corriente eléctrica continua. Por tanto, la cantidad de energía solar transformada es directamente proporcional al tamaño del módulo fotovoltaico, con lo que si necesitamos más energía, únicamente debemos instalar una mayor superficie de celdas fotovoltaicas");
    
        let contenedor2 = document.createElement("div");
            let h2Cont2 = document.createElement("h2");
            let tituloCont2 = document.createTextNode("Servicio de energía hidráulica");
            let divCont2 = document.createElement("div");
            let textoCont2 = document.createTextNode("La corriente de agua, que puede ser modulada por las compuertas de una presa situada en un río, empuja las cuchillas de una turbina y la hace girar.\nEse movimiento hace que un generador produzca electricidad.\nLa cantidad de energía que produce puede ser regulada según la altura desde la que caiga el agua o el caudal de la misma.");
        let contenedor3 = document.createElement("div");
            let h2Cont3 = document.createElement("h2");
            let tituloCont3 = document.createTextNode("Servicio de energía eólica");
            let divCont3 = document.createElement("div");
            let textoCont3 = document.createTextNode("La energía eólica es la energía que se obtiene del viento. Se trata de un tipo de energía cinética producida por el efecto de las corrientes de aire. Esta energía la podemos convertir en electricidad a través de un generador eléctrico. Es una energía renovable, limpia, que no contamina y que ayuda a reemplazar la energía producida a través de los combustibles fósiles.");

            let contenedorLogin = document.createElement("div");
            let imagenLogin = document.createElement("img");
    
        contenedorInicial.id="contenido";
    
        contenedor1.id="contenedor1";
            divCont1.id="info";
    
        contenedor2.id="contenedor2";
            divCont2.id="info";
        contenedor3.id="contenedor3";
            divCont3.id="info";
    
        contenedorLogin.id="login-button";
            imagenLogin.src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png";
            imagenLogin.id="imagen-login";
    
        body.appendChild(contenedorInicial);
    
        contenedorInicial.appendChild(contenedor1);
            contenedor1.appendChild(h2Cont1);
                h2Cont1.appendChild(tituloCont1);
            contenedor1.appendChild(divCont1);
                divCont1.appendChild(textoCont1);
        contenedorInicial.appendChild(contenedor2);
            contenedor2.appendChild(h2Cont2);
                h2Cont2.appendChild(tituloCont2);
            contenedor2.appendChild(divCont2);
                divCont2.appendChild(textoCont2);
        contenedorInicial.appendChild(contenedor3);
            contenedor3.appendChild(h2Cont3);
                h2Cont3.appendChild(tituloCont3);
            contenedor3.appendChild(divCont3);
                divCont3.appendChild(textoCont3);
        contenedorInicial.appendChild(contenedorLogin);
            contenedorLogin.appendChild(imagenLogin);
    }
    
    main2(usuarioClass) {         
        //selector
        let body = document.getElementsByTagName("body")[0];

        let [nombreUsu, perfilUsu, tablaUsu] = [usuarioClass.nombre,usuarioClass.perfil, usuarioClass.tabla]; //destructuring

        let contenedor1grande = document.createElement("div");
        let contenedorFlex = document. createElement("div");
            let contenedor4 = document.createElement("div");
            let contenedor5 = document.createElement("div");
            let chart = document.createElement("div");
            let imagenFlecha = document.createElement("img");
        //template literal
        let textoCont4 = `<table id="tablaDatos">`;
        for (let i = 0; i < tablaUsu.length; i++) {
            textoCont4 += `<tr>`;
            for (let j = 0; j < tablaUsu[i].length; j++) {
                if (i==0) {
                    textoCont4 += `<th>${tablaUsu[i][j]}</th>`;
                }else{
                    textoCont4 += `<td>${tablaUsu[i][j]}</td>`;
                }
                    
            }
            textoCont4 += `</tr>`;
        }
        textoCont4 += `</table>`;
        
        //selector con querySelector y creación de nodos
        let imagenLogin = document.querySelector("#imagen-login");
        let datosNombre = document.createTextNode(nombreUsu);
        let datosCerrarSesion = document.createTextNode("Cerrar sesión");
        let contenedorInicial = document.getElementById("contenido");//selector
        let divNombreLogin = document.createElement("div");
        let nombreLogin = document.createElement("label");
        let cerrarSesion = document.createElement("label")
            divNombreLogin.id = "login-nombre";
            cerrarSesion.id = "cerrarSesion";

        contenedor1grande.id="contenedor1grande";
            imagenFlecha.src="./img/flecha.png";
            imagenFlecha.id="flecha";    
            contenedorFlex.id="contenedorFlex";
                contenedor4.id="contenedor4";
                contenedor5.id="contenedor5";
                    chart.id="curve_chart";

        imagenLogin.src=perfilUsu;

        body.appendChild(contenedor1grande);


        contenedorInicial.appendChild(divNombreLogin);
            divNombreLogin.appendChild(nombreLogin);
                nombreLogin.appendChild(datosNombre);
            divNombreLogin.appendChild(cerrarSesion);
                cerrarSesion.appendChild(datosCerrarSesion);
                cerrarSesion.addEventListener('click', Galletas.deleteCookie);//registro de eventos

        contenedor1grande.appendChild(contenedorFlex);
        contenedor1grande.appendChild(imagenFlecha);
            contenedorFlex.appendChild(contenedor4);
                contenedor4.innerHTML = textoCont4;
            contenedorFlex.appendChild(contenedor5);
                contenedor5.appendChild(chart);

    
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

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(tablaUsu);

            var options = {
                title: 'Productividad de las placas solares',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
        }
    }
}
