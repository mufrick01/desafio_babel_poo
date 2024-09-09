"use strict";

var _Cliente = require("./clases/Cliente.js");
var _Impuesto = require("./clases/Impuesto.js");
var _readline = _interopRequireDefault(require("readline"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Ingrese el nombre del cliente: ", function (nombre) {
  var cliente = new _Cliente.Cliente(nombre);
  rl.question("Ingrese el Monto anual bruto: ", function (montoAnualBruto) {
    rl.question("Ingrese deducciones: ", function (deducciones) {
      var impuesto = new _Impuesto.Impuesto(montoAnualBruto, deducciones);
      cliente.setImpuesto(impuesto);
      console.log(cliente.calcularImpuestos());
      rl.close();
    });
  });
});