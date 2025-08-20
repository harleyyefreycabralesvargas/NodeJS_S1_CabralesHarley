let { Item, _items,_seq } = require("../models/itemModel");
let prompt = require('prompt-sync')();


function crear() {
    let id = _seq + 1;
    let nombreCrear=prompt("Ingresa tu nombre: ");
    let descripcionCrear=prompt("Ingresa una descripcion: ");
    let nuevo = new Item({
        id,
        nombreCrear,
        descripcionCrear,
        creadoEn: new Date(),
        actualizadoEn: new Date()
    });
    _items.push(nuevo);
    return nuevo;
}

function listar() {
    let data = _items;
    console.log("Lista de personas:");
    data.forEach(item => {
        console.log(`ID: ${item.id}, Nombre: ${item.nombre}, Descripción: ${item.descripcion}, Creado en: ${item.creadoEn}, Actualizado en: ${item.actualizadoEn}`);
    });
}

function buscarID() {
    let id = prompt("Ingresa el ID del item que quieres buscar: ");
    return _items.find(i => i.id === Number(id)) || null;
}



module.exports = { crear, listar, buscarID};