// D - Dependency Inversion Principle (Principio de Inversión de Dependencia):

// ejemplo malo

class perroMalo {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class masajeMalo extends perroMalo {
    darMasaje() {
        return `${this.nombre} esta teniendo un masaje`;
    }
} 

class bañoMalo extends masajeMalo {
    darBaño() {
        return `${this.nombre} esta teniendo un baño`;
    }
}
let perro1 = new bañoMalo("Firulais");
console.log("Ejemplo malo")
console.log(perro1.darMasaje());
console.log(perro1.darBaño());

// El problema aquí es que la clase bañoMalo depende de la clase masajeMalo, lo que viola el principio de inversión de dependencia. La clase bañoMalo debería depender de una clase que defina los métodos que necesita, en lugar de depender directamente de una clase que es ya un metodo.
console.log("#######################################################");
// ejemplo bueno

class PerroBueno {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Tratamientos {
}
class MasajeBueno extends Tratamientos {
    constructor() {
        super();
    }
    darMasaje() {
        return `${this.perro.nombre} esta teniendo un masaje`;
    }
}
class BañoBueno extends Tratamientos {
    constructor() {
        super();
    }
    darBaño() {
        return `${this.perro.nombre} esta teniendo un baño`;
    }
}


console.log("Ejemplo bueno")
let perro2 = new PerroBueno("Rodolfo");
let masaje2 = new MasajeBueno();
masaje2.perro = perro2;
console.log(masaje2.darMasaje());
let baño2 = new BañoBueno();
baño2.perro = perro2;
console.log(baño2.darBaño());


// Ahora la clase Tratamientos define los métodos que necesita y no depende directamente de una clase específica