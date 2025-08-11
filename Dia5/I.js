// I - Interface Segregation Principle (Principio de Segregación de Interfaces):

// ejemplo malo

class juguetesMalo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    canta() {
        return `${this.nombre} esta cantando`;
    };
    moverse() {
        return `${this.nombre} se mueve`;
    }
}

class OsoMalo extends juguetesMalo {
    constructor(nombre) {
        super(nombre)
    }
    canta() {
        return `${this.nombre} canta`;
    }
    moverse() {
        return `${this.nombre} no se mueve`;
    }
}

class CarroMalo extends juguetesMalo {
    constructor(nombre) {
        super(nombre);
    }
    canta() {
        return `${this.nombre} no canta`;
    }
    moverse() {
        return `${this.nombre} se mueve`;
    }
}
console.log("#######################################################");
console.log("Ejemplo malo")
let oso1 = new OsoMalo("Oso");
console.log(oso1.canta());
console.log(oso1.moverse());
let carro1 = new CarroMalo("Carro");
console.log(carro1.canta());
console.log(carro1.moverse());

// El problema aquí es que tanto el oso como el carro implementan métodos que no ambos utilizan, lo que viola el principio de segregación de interfaces. El oso no necesita moverse y el carro no necesita cantar.
console.log("#######################################################");
// ejemplo bueno

class JuguetesMoviles { 
    constructor(nombre) {
        this.nombre = nombre;
    }
    moverse() {
        return `${this.nombre} se mueve`;
    }
}
class JuguetesCantantes {
    constructor(nombre) {
        this.nombre = nombre;
    }
    canta() {
        return `${this.nombre} esta cantando`;
    };
}
class OsoBueno extends JuguetesCantantes {
    constructor(nombre) {
        super(nombre);
    }
}   
class CarroBueno extends JuguetesMoviles {
    constructor(nombre) {
        super(nombre);
    }
}
console.log("Ejemplo bueno")
let oso2 = new OsoBueno("Oso");
console.log(oso2.canta());
let carro2 = new CarroBueno("Carro");
console.log(carro2.moverse());

// Ahora, el oso solo implementa la interfaz de juguetes cantantes y el carro solo implementa la de juguetes moviles ya con los metodos que usan.
