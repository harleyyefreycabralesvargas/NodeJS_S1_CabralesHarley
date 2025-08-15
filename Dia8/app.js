const {ItemModel}=require("./models/itemModel")
const model =new ItemModel();
model.crear({nombre:"Lapicero",descripcion:"Azul"});
model.crear({nombre:"Canoa",descripcion:"Negro"});
console.log(model.listar())
model.eliminar(1)
console.log(model.listar())
model.crear({nombre:"Negro",descripcion:"Africano"});
console.log(model.listar())