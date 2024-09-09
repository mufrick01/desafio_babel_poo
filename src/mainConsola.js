import { Cliente } from "./clases/Cliente.js";
import { Impuesto } from "./clases/Impuesto.js";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del cliente: ", (nombre) => {
    const cliente = new Cliente(nombre);

    rl.question("Ingrese el Monto anual bruto: ", (montoAnualBruto) => {
        rl.question("Ingrese deducciones: ", (deducciones) => {
            let impuesto = new Impuesto(montoAnualBruto, deducciones);
            cliente.setImpuesto(impuesto);
            console.log(cliente.calcularImpuestos());

            rl.close();
        });
    });
});
