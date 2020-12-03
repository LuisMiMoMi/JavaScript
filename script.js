import {Generador} from '/views/views.js';
(() => {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function () {
        let generador = new Generador();
        generador.main();
        eventos(generador);
      });
})();

function eventos(generador) {
  $('#login-button').click(function(){
    $('#contenido').fadeOut("slow",function(){
      $("#container").fadeIn();
      TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
  });
  $(".close-btn").click(function(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container").fadeOut(800, function(){
      $("#contenido").fadeIn(800);
    });
  });
  $("a[href^=\"#\"]").click(function () {
    validar().then(response => {
      if (response) {
        TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
        TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
        $("#container").fadeOut(800, function(){
          generador.main2();
        $("#contenido").fadeIn(800);
        });
      } else {
        TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
        TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
        $("#container").fadeOut(800, function(){
        $("#contenido").fadeIn(800);
        });
      }
      
    }
    );
    
     
  });
}
/*function generarApartados() {
  let body = document.getElementsByTagName("body")[0];
  let contenedorInicial = document.createElement("div");
  let contenedor1 = document.createElement("div");
  let contenedor2 = document.createElement("div");
  let contenedor3 = document.createElement("div");
  let contenedor1grande = document.createElement("div");
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
}*/

class Usuario {
  constructor(nombre, contraseña) {
    this.nombre = nombre;
    this.contraseña = contraseña;
  }
  
}
async function validar(){
    let arrays = await datos();
    let login = arrays.usuarios;

    let bool = false;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("contra").value;
    login.forEach(element => {
        if (email == element.email && password == element.contraseña) {
          bool = true;
        }
    });
    return bool;
}
async function datos(){
  let array = {};
  await fetch("../json/usuarios.json")
  .then(response => response.json())
  .then(dato => array = dato)
  return array;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
} 