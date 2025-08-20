// S - Single Responsibility Principle (Principio de Responsabilidad Única):
// Solo una responsabilidad
// ejemplo malo
console.log("#######################################################");
class directorMalo {
    constructor(nombre){
        this.nombre = nombre;
        this.grupos = ["S1","A1"];
        this.trainers = ["Pedro","Juan"];
        this.estudiantes = ["Harley","Emily"];
    }

    asignarTrainers(trainer,grupo) {
        trainer.grupo = grupo;
        return `Trainer ${trainer.nombre} asignado al grupo ${grupo} por ${this.nombre}`;
    }

    asignarNotas(estudiante,nota) {
        estudiante.nota = nota;
        return `Nota ${estudiante.nota} asignada a ${estudiante.nombre} por ${this.nombre}`;
    }
}
console.log("Ejemplo malo")
director1 = new directorMalo("Andres");
console.log(director1.asignarTrainers({ nombre: "Pedro" },"S1"));
console.log(director1.asignarNotas({nombre:"Harley"},100));

// director tendria 2 funcionalidades de asignar trainers a grupos y  colocar nota a las estudiantes por lo que esta mal

// ejemplo bueno
console.log("#######################################################");

class directorBueno {
    constructor(nombre) {
        this.nombre=nombre
        this.grupos = ["S1","A1"];
        this.trainers = ["Pedro","Juan"];
    }

    asignarTrainers(trainer,grupo) {
        trainer.grupo = grupo;
        return `Trainer ${trainer.nombre} asignado al grupo ${grupo} por ${this.nombre}`;
    }
}
class trainer{
    constructor(nombre){
        this.nombre = nombre;
        this.grupo = null;
        this.estudiantes= ["Harley","Emily"];
    }
    asignarNotas(estudiante,nota) {
        estudiante.nota = nota;
        return `Nota ${estudiante.nota} asignada a ${estudiante.nombre} por ${this.nombre}`;
    }
}
console.log("Ejemplo bueno")
director2 = new directorBueno("Andres");
console.log(director2.asignarTrainers({ nombre: "Pedro" },"S1"));
trainer1 = new trainer("Pedro");
console.log(trainer1.asignarNotas({nombre:"Harley"},100));
// ahora el director solo se encarga de asignar trainers a grupos y el trainer se encarga de colocar notas a los estudiantes, por lo que cada clase tiene una sola responsabilidad