import {Generador} from '/views/views.js';
import {Usuario} from '/model/usuarios.js';
export {Galletas};
(() => {
    "use strict";
  
    document.addEventListener("DOMContentLoaded", function () {
        const generador = new Generador();
        generador.main();
        eventos(generador);
      });
})();

const eventos = function (generador) {
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
async function validar(){
    let arrays = await datos();
    let login = arrays.usuarios;
    let stringElementos = JSON.stringify(login);
    let usuarioObject = JSON.parse(stringElementos);
    let bool = false;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("contra").value;
    for (const element of usuarioObject) {
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
  await fetch("../json/usuarios.json")
  .then(response => response.json())
  .then(dato => array = dato);
  return array;
}
class Galletas {
  static setCookie(cname, cvalue, exdays) {
    var d = new Date();
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



