import { Cliente } from "./clases/Cliente.js";
import { Impuesto } from "./clases/Impuesto.js";


const cliente = new Cliente('Don Pepe', new Impuesto(110,10))

console.log(cliente.calcularImpuestos())