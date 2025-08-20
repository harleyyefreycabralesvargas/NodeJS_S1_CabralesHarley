let { Item, _items } = require("../models/itemModel");
let prompt = require('prompt-sync')();


function crear() {
    let id = _items.at(-1).id + 1;
    let nombre=prompt("Ingresa tu nombre: ");
    let descripcion=prompt("Ingresa una descripcion: ");
    let creadoEn=new Date();
    let actualizadoEn=new Date();
    _items.push({
        id,nombre,descripcion,creadoEn,actualizadoEn
    });
}

function listar() {
    let data = _items;
    console.log("Lista de personas:");
    data.forEach(Item => {
        console.log(`id: ${Item.id}, Nombre: ${Item.nombre}, Descripción: ${Item.descripcion}, Creado en: ${Item.creadoEn}, Actualizado en: ${Item.actualizadoEn}`);
    });
}

function buscarID() {
    let id = prompt("Ingresa el id del Item que quieres buscar: ");
    function filtrarPorId(obj) {
        return obj.id == id;
    }
    let busqueda=_items.filter(filtrarPorId)
    busqueda.forEach(Item => {
        console.log(`id: ${Item.id}, Nombre: ${Item.nombre}, Descripción: ${Item.descripcion}, Creado en: ${Item.creadoEn}, Actualizado en: ${Item.actualizadoEn}`);
    });
}

function actualizar() {
    let data = _items();
    let datainicial= _items();
    let cedula = prompt("Ingresa el id del item que quieres actualizar: ");
    let nuevaCedula = prompt("Ingresa el nuevo nombre: ");
    let nuevoNombre = prompt("Ingresa la nueva descripcion: ");
    let nuevaActualizacion=new Date();
    function filtrarPorNombre(obj) {
        return obj.id === id;
    }
    let item = data.find(filtrarPorNombre);
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



module.exports = { crear, listar, buscarID};