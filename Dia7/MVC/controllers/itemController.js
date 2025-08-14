const { loadData, saveData } = require('../models/nombresModel');
const prompt = require('prompt-sync')();

function createItem() {
    const data = loadData();
    let contador=data.length;
    let id = contador+1;
    let cedula = prompt("Ingresa tu cedula: ");
    let nombre = prompt("Ingresa tu nombre: ");
    let edad = prompt("Ingresa tu edad: ");
    let estrato= prompt("Ingresa tu estarto: ");
    
    data.push({
        id,cedula, nombre,edad,estrato
    });
    console.log(data);
    saveData(data);
    console.log("la persona fue agregada");
}

function listItems() {
    const data = loadData();
    console.log("Lista de personas:");
    data.forEach(item => {
        console.log(`ID: ${item.id}, Cedula: ${item.cedula},Nombre: ${item.nombre},Edad: ${item.edad},Estrato: ${item.estrato}`);
    });
}

function updateItem() {
    const data = loadData();
    const datainicial= loadData();
    let cedula = prompt("Ingresa la cedula de la persona que quieres actualizar: ");
    let nuevaCedula = prompt("Ingresa la nueva cedula: ");
    let nuevoNombre = prompt("Ingresa el nuevo nombre: ");
    let nuevaEdad = prompt("Ingresa la nueva edad: ");
    let nuevoEstrato = prompt("Ingresa el nuevo estrato: ");
    function filtrarPorNombre(obj) {
        return obj.cedula === cedula;
    }
    const item = data.find(filtrarPorNombre);
    if (item) {
        item.cedula = nuevaCedula;
        item.nombre = nuevoNombre;
        item.edad = nuevaEdad;
        item.estrato = nuevoEstrato;
        saveData(data);
        console.log("La persona con cedula: "+cedula+" fue actualizada");
    }
    else {
        console.log("No se encontró la persona con esa cedula.");
    }
    console.log("de:\n" + JSON.stringify(datainicial));
    console.log("\nAhora el nuevo arrgelo:\n" + JSON.stringify(data));
}

function deleteItem() {
    data = loadData()
    let cedula = prompt("Ingresa la cedula de la persona que quieres eliminar: ");
    function filtrarPorNombre(obj) {
        return obj.cedula !== cedula;
    }
    const datosEliminados = data.filter(filtrarPorNombre);
    saveData(datosEliminados)
    console.log('Persona eliminada con cedula: ' + cedula);

    console.log("de:\n" + JSON.stringify(data));
    console.log("\nAhora el nuevo arrgelo:\n " + JSON.stringify(datosEliminados));
}

module.exports = { createItem, listItems, updateItem, deleteItem };