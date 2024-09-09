import { Impuesto } from "./Impuesto.js";

export class Cliente {
    constructor(nombre, impuestos = new Impuesto()){
        this.nombre = nombre;
        this.impuestos = impuestos;
    }

    setImpuesto(objImpuesto){
        this.impuestos = objImpuesto
    }

    setNombre(nombre){
        this.nombre = nombre
    }
    getNombre(){
        return this.nombre
    }

    calcularImpuestos(){
        const deducciones = this.impuestos.getDeducciones();
        const montoBrutoAnual = this.impuestos.getMontoBrutoAnual();

        return (montoBrutoAnual-deducciones)*0.21
    }
}