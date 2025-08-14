const prompt = require('prompt-sync')();
const path = "./db.json";
const fs = require('fs');

function loadData() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    };
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}
function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data));
}
function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear elemento");
    console.log("2. Listar elementos");
    console.log("3. Actualizar elemento");
    console.log("4. Eliminar elemento");
    console.log("5. Salir\n");

    let opcionUsuario = prompt("Selecciona una opción: ");
    return opcionUsuario;
}

function handleMenu(option) {
    switch (option) {
        case "1":
            createItem();
            break;
        case "2":
            listItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            let nombreAeliminar = prompt("Ingresa un nombre del objeto que quiere eliminar: ");
            deleteItem(nombreAeliminar);
            break;
        case "5":
            booleanito = false;
            break;
        default:
            console.log("Opción inválida.");
            showMenu();
    }
}

function createItem() {
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();
    const data = loadData();
    data.push({
        id, nombre
    });
    console.log(data);
    saveData(data);
    console.log("El elemento fue agregado!");
}


function listItems() {
    const data = loadData();
    console.log("Lista de elementos:");
    data.forEach(item => {
        console.log(`ID: ${item.id}, Nombre: ${item.nombre}`);
    });
}

function updateItem() {
    const data = loadData();
    let nombre = prompt("Ingresa el nombre del objeto que quieres actualizar: ");
    let nuevoNombre = prompt("Ingresa el nuevo nombre: ");
    function filtrarPorNombre(obj) {
        return obj.nombre === nombre;
    }
    const item = data.find(filtrarPorNombre);
    if (item) {
        item.nombre = nuevoNombre;
        saveData(data);
        console.log("El elemento fue actualizado!");
    }
    else {
        console.log("No se encontró el elemento con ese nombre.");
    }
    console.log("de\n" + JSON.stringify(data));
    console.log("\nAhora el nuevo arrgelo" + JSON.stringify(data));
}

function deleteItem(nombre) {
    data = loadData()
    function filtrarPorNombre(obj) {
        return obj.nombre !== nombre;
    }
    const datosEliminados = data.filter(filtrarPorNombre);
    saveData(datosEliminados)
    console.log('Objeto eliminado con nombre: ' + nombre);

    console.log("de\n" + JSON.stringify(data));
    console.log("\nAhora el nuevo arrgelo" + JSON.stringify(datosEliminados));
    console.log("El elemento fue eliminado");
}
let booleanito = true;

while (booleanito) {
    let opcionUsuario = showMenu();
    handleMenu(opcionUsuario);
}
