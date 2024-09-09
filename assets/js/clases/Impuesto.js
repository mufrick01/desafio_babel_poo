export class Impuesto {

    constructor(montoBrutoAnual=0, deducciones=0) {

        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    getMontoBrutoAnual = () => this.montoBrutoAnual;
    setMontoBrutoAnual(value) {
        this.montoBrutoAnual = value
    }



    getDeducciones= () => this.deducciones;
    setDeducciones(value) {
        this.deducciones = value
    }

}