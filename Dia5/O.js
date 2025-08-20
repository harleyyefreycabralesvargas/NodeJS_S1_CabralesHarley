// O - Open/Closed Principle (Principio Abierto/Cerrado):
// Expandir no modificar
// ejemplo malo
console.log("#######################################################");

class CalculadoraMala {
    calcular(tipo, a, b) {
        if (tipo === "suma") return 'la suma es '+ (a + b);
        if (tipo === "resta") return 'la resta es '+ (a - b);
        // Si queremos multiplicar, tenemos que modificar aquí...
        // if (tipo === "multiplicacion") return a * b;
    }
}
console.log("Ejemplo malo")
console.log(new CalculadoraMala().calcular("suma", 5, 3));
console.log(new CalculadoraMala().calcular("resta", 5, 3));



// A la calculadora se le modifico su metodo calcular para que pueda realizar una multiplicacion, por lo que no cumple con el principio abierto/cerrado ya que se debe modificar el codigo para agregar nuevas funcionalidades

// ejemplo bueno
console.log("#######################################################");

class CalculadoraBuena{
    suma(a,b) {
        return 'la suma es ' + (a + b);
    }
    resta(a,b) {
        return 'la resta es ' + (a - b);
    }
    multiplicacion(a,b) {
        return 'la multiplicacion es ' + (a * b);
    }
}
console.log("Ejemplo bueno")
console.log(new CalculadoraBuena().suma(5, 3));
console.log(new CalculadoraBuena().multiplicacion(5, 3));
// Si cumple el principio ya que no se modifica el codigo para agregar nuevas funcionalidades, solo se crea un nuevo metodo dentro de la clase