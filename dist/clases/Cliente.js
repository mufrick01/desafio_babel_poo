"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;
var _Impuesto = require("./Impuesto.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cliente = exports.Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuestos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Impuesto.Impuesto();
    _classCallCheck(this, Cliente);
    this.nombre = nombre;
    this.impuestos = impuestos;
  }
  return _createClass(Cliente, [{
    key: "setImpuesto",
    value: function setImpuesto(objImpuesto) {
      this.impuestos = objImpuesto;
    }
  }, {
    key: "setNombre",
    value: function setNombre(nombre) {
      this.nombre = nombre;
    }
  }, {
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "calcularImpuestos",
    value: function calcularImpuestos() {
      var deducciones = this.impuestos.getDeducciones();
      var montoBrutoAnual = this.impuestos.getMontoBrutoAnual();
      return (montoBrutoAnual - deducciones) * 0.21;
    }
  }]);
}();