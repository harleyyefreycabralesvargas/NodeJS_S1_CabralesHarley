const prompt = require('prompt-sync')();

function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear persona");
    console.log("2. Listar personas");
    console.log("3. Actualizar persona");
    console.log("4. Eliminar persona");
    console.log("5. Salir");
    return prompt("Selecciona una opción: ");
}

module.exports = { showMenu };