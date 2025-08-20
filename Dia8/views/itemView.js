let prompt = require('prompt-sync')();

function mostrarMenu() {
    console.log("\n=== CRUD de Items ===");
    console.log("1) Crear");
    console.log("2) Listar");
    console.log("3) Ver por ID");
    console.log("4) Actualizar");
    console.log("5) Eliminar");
    console.log("0) Salir");
    return prompt("Selecciona una opción: ");
}



module.exports = {
    mostrarMenu,
};