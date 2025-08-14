const { showMenu } = require('./views/menuView');
const { createItem, listItems, updateItem, deleteItem } = require('./controllers/itemController');

let booleanito = true;
while (booleanito) {
    const opcion = showMenu();
    switch (opcion) {
        case "1": createItem(); break;
        case "2": listItems(); break;
        case "3": updateItem(); break;
        case "4": deleteItem(); break;
        case "5":
             console.log("Adios");
             booleanito = false; break;
        default: console.log("Opción inválida, vuelve a intentar");
    }
}