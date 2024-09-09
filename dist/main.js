"use strict";

var _Cliente = require("./clases/Cliente.js");
var _Impuesto = require("./clases/Impuesto.js");
var cliente = new _Cliente.Cliente('Don Pepe', new _Impuesto.Impuesto(110, 10));
console.log(cliente.calcularImpuestos());