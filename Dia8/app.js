const { mostrarMenu } = require('./views/itemView');
const { crear, listar, actualizar, eliminar,buscarID } = require('./controllers/itemController');

let booleanito = true;
while (booleanito) {
    const opcion = mostrarMenu();
    switch (opcion) {
        case "1": crear(); break;
        case "2": listar(); break;
        case "3": buscarID(); break;
        case "4": actualizar(); break;
        case "5": eliminar(); break;
        case "0":
            console.log("Adios");
            booleanito = false; break;
        default: console.log("Opción inválida, vuelve a intentar");
    }
}














const {ItemModel}=require("./models/itemModel")
const model =new ItemModel();
model.crear({nombre:"Lapicero",descripcion:"Azul"});
model.crear({nombre:"Canoa",descripcion:"Negro"});
console.log(model.listar())
model.eliminar(1)
console.log(model.listar())
model.crear({nombre:"Negro",descripcion:"Africano"});
console.log(model.listar())