class Item {
    constructor({ id, nombre, descripcion }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}

// Estado interno del modelo
let _items = [];
let _seq = 1;

// Exportamos el "estado" y la clase Item
module.exports = { Item, _items, _seq };
