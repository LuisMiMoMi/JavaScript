import {Generador} from './views/views.js';
import {Usuario} from './model/usuarios.js';
export {Galletas};
(() => { //función autoinvocada y funcion flecha
    "use strict"; //use strict
  
    document.addEventListener("DOMContentLoaded", function () { //registro de eventos
        const generador = new Generador(); //Objetos y variable const
        generador.main();
        eventos(generador);
      });
})();

const eventos = function (generador) { //variable const y expresión de función y registro de eventos con jquery
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
        let formElement = document.getElementById("elementoForm");
        var request = new XMLHttpRequest();//XMLHttpRequest
        request.open("POST", "submitForm.php");
        request.send(new FormData(formElement));//formData
    validar().then(response => { //funcion flecha y promesa
      if (response) {
        TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
        TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
        $("#container").fadeOut(800, function(){
          generador.main2(usuarioClass);
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
let usuarioClass;
async function validar(){ //Declaración de función y validación de formularios, uso de cookies
    let arrays = await datos(); //array
    let login = arrays.usuarios;
    let stringElementos = JSON.stringify(login);
    let usuarioObject = JSON.parse(stringElementos);
    let bool = false;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("contra").value;
    for (const element of usuarioObject) { //iterables
      if (email == element.email && password == element.contraseña) {
        usuarioClass = Object.assign(new Usuario, element);
        Galletas.setCookie("username", element.nombre, 7);
        bool = true;
      }
    }
    return bool;
}
async function datos(){
  let array = {};
  await fetch("../json/usuarios.json") //fetch y promesa
  .then(response => response.json())//funcion flecha y JSON
  .then(dato => array = dato);
  return array;
}
class Galletas { //Clases Cookies y guardado en local storage
  static setCookie(cname, cvalue, exdays) {
    var d = new Date(); //objecto predefinido
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = `${cname} = ${cvalue}; ${expires}; path=/`;//template literal
  }
  static deleteCookie(){
    let galleta = Galletas.getCookie("username");
    galleta = document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    let generador = new Generador();
    generador.main();
    eventos(generador);
  }
  static getCookie(cname) {
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
  static checkCookie() {
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
}



