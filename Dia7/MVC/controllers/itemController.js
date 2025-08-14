const { loadData, saveData } = require('../models/nombresModel');
const prompt = require('prompt-sync')();

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
    const datainicial= loadData();
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
    console.log("de:\n" + JSON.stringify(datainicial));
    console.log("\nAhora el nuevo arrgelo:\n" + JSON.stringify(data));
}

function deleteItem(nombre) {
    data = loadData()
    let nombreAeliminar = prompt("Ingresa el nombre del objeto que quieres eliminar: ");
    function filtrarPorNombre(obj) {
        return obj.nombre !== nombreAeliminar;
    }
    const datosEliminados = data.filter(filtrarPorNombre);
    saveData(datosEliminados)
    console.log('Objeto eliminado con nombre: ' + nombreAeliminar);

    console.log("de:\n" + JSON.stringify(data));
    console.log("\nAhora el nuevo arrgelo:\n " + JSON.stringify(datosEliminados));
}

module.exports = { createItem, listItems, updateItem, deleteItem };