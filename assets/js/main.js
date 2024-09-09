import { Cliente } from "./clases/Cliente.js";
import { Impuesto } from "./clases/Impuesto.js";



let cliente;
let impuesto;

document.addEventListener("DOMContentLoaded", () => {


    document.body.innerHTML = `
    
    <form id="formularioCliente">
        <label>
            Nombre
            <Input type="text" required id="nombreCliente">
        </label>
        <button type="submit">Enviar</button>
    </form>
    
    `

    const formularioCliente = document.querySelector('#formularioCliente');
    const inputNombre = document.querySelector('#nombreCliente');

    formularioCliente.addEventListener("submit", (event) => {
        event.preventDefault()

        let nombre = inputNombre.value.trim();
        if (nombre === "") {
            nombre = "ClienteSinNombre"
        }
        cliente = new Cliente(nombre)


        document.body.innerHTML = `
        <h1>
            Hola ${cliente.getNombre()} 
        </h1>
        <form id="formularioImpuestos">
             <label>
                Monto bruto anual
                <Input type="text" required id="montoBrutoAnual">
            </label>
             <label>
                Deducciones
                <Input type="text" required id="deducciones">
            </label>
            <button type="submit">Enviar</button>
        </form>
        <div id="resultado"></div>
        `

        const montoBrutoAnual = document.querySelector('#montoBrutoAnual');
        const deducciones = document.querySelector('#deducciones');
        const formularioImpuestos = document.querySelector('#formularioImpuestos')

        formularioImpuestos.addEventListener("submit",(event)=>{
            
            event.preventDefault();

            if(isNaN(montoBrutoAnual.value) || isNaN (deducciones.value)){
                return alert('SOLO NÚMEROS');
            }

            impuesto = new Impuesto(montoBrutoAnual.value,deducciones.value);
            cliente.setImpuesto(impuesto);
            
            const resultado = document.querySelector('#resultado')
            resultado.innerHTML = `<h2>Impuesto total: ${cliente.calcularImpuestos()}</h2>`

        })
    })

})









