"use strict";

require("core-js/modules/es.string.trim.js");
var _Cliente = require("./clases/Cliente.js");
var _Impuesto = require("./clases/Impuesto.js");
var cliente;
var impuesto;
document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = "\n    \n    <form id=\"formularioCliente\">\n        <label>\n            Nombre\n            <Input type=\"text\" required id=\"nombreCliente\">\n        </label>\n        <button type=\"submit\">Enviar</button>\n    </form>\n    \n    ";
  var formularioCliente = document.querySelector('#formularioCliente');
  var inputNombre = document.querySelector('#nombreCliente');
  formularioCliente.addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = inputNombre.value.trim();
    if (nombre === "") {
      nombre = "ClienteSinNombre";
    }
    cliente = new _Cliente.Cliente(nombre);
    document.body.innerHTML = "\n        <h1>\n            Hola ".concat(cliente.getNombre(), " \n        </h1>\n        <form id=\"formularioImpuestos\">\n             <label>\n                Monto bruto anual\n                <Input type=\"text\" required id=\"montoBrutoAnual\">\n            </label>\n             <label>\n                Deducciones\n                <Input type=\"text\" required id=\"deducciones\">\n            </label>\n            <button type=\"submit\">Enviar</button>\n        </form>\n        <div id=\"resultado\"></div>\n        ");
    var montoBrutoAnual = document.querySelector('#montoBrutoAnual');
    var deducciones = document.querySelector('#deducciones');
    var formularioImpuestos = document.querySelector('#formularioImpuestos');
    formularioImpuestos.addEventListener("submit", function (event) {
      event.preventDefault();
      if (isNaN(montoBrutoAnual.value) || isNaN(deducciones.value)) {
        return alert('SOLO NÚMEROS');
      }
      impuesto = new _Impuesto.Impuesto(montoBrutoAnual.value, deducciones.value);
      cliente.setImpuesto(impuesto);
      var resultado = document.querySelector('#resultado');
      resultado.innerHTML = "<h2>Impuestos total: ".concat(cliente.calcularImpuestos(), "</h2>");
    });
  });
});