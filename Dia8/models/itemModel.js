class Item {
    constructor({ id, nombre, descripcion }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}

let _items = [{
    id: 1,
    nombre: "carro", 
    descripcion:"carro de juguete",
    creadoEn:" Wed Aug 20 2025 06:25:00 GMT-0500 (hora estándar de Colombia)",
    actualizadoEn: "Wed Aug 20 2025 06:25:00 GMT-0500 (hora estándar de Colombia)"
},];

console.log(_items.at(-1).id);
module.exports = { Item, _items };
