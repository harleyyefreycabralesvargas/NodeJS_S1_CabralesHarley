// L - Liskov Substitution Principle (Principio de Sustitución de Liskov):
// Estandarizar el padre
// ejemplo malo

class vehiculosMalo {
    encender() {
        return "El vehículo ha sido encendido";
    }
}
class carroMalo extends vehiculosMalo {
    encender() {
        return "El carro ha sido encendido";
    }
}
class bicicletaMalo extends vehiculosMalo {
    encender() {
        return ("Las bicicletas no tienen encendido");
    }
}
console.log("#######################################################");
console.log("Ejemplo malo")
let vehiculo1 = new carroMalo();
console.log(vehiculo1.encender());
let vehiculo2 = new bicicletaMalo();
console.log(vehiculo2.encender());

// Hay un problema con la bicicleta, ya que no cumple con el principio de sustitución de Liskov, ya que al llamar al metodo encender de la clase vehiculosMalo, la bicicleta no puede ser encendida como un carro, lo que rompen el principio de que todos los vehículos deberían poder ser encendidos.

console.log("#######################################################");
// ejemplo bueno

class VehiculoBueno {
    frenar(){
        return "El vehículo ha frenado";
    }
}
class CarroBueno extends VehiculoBueno {
    frenar() {
        return "El carro ha sido frenado";
    }
}
class BicicletaBueno extends VehiculoBueno {
    frenar() {
        return "La bicicleta ha sido frenada";
    }
}
console.log("Ejemplo bueno")
let vehiculo3 = new CarroBueno();
console.log(vehiculo3.frenar());
let vehiculo4 = new BicicletaBueno();
console.log(vehiculo4.frenar());
// Ahora tanto el carro como la bicicleta pueden ser tratados como vehículos y ambos cumplen con el principio de sustitución de Liskov, ya que ambos pueden frenar.