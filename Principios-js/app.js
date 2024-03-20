let variable = "Coder"
let var2 = "House"

//Contador

class Contador {
    static cuentGlobal = 0

    constructor(responsable){
        this.responsable = responsable
        this.cuentaIndv = 0

    }

    //Metodo
    obteneResponsable(){
        return this.responsable
    }
    obtenerCuentaInd(){
        return this.cuentaIndv
    }
    static obtenerCuentaGlobal(){
        return Contador.cuentGlobal
    }
    contar() {
        this.cuentaIndv ++
        Contador.cuentGlobal ++
    }
}
const contador1 = new Contador("pér1")
//console.log(contador1.obteneResponsable());

contador1.contar()
contador1.contar()
console.log(Contador.obtenerCuentaGlobal())