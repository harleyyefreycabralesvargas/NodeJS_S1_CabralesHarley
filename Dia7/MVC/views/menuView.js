const prompt = require('prompt-sync')();

function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir");
    return prompt("Selecciona una opción: ");
}

module.exports = { showMenu };