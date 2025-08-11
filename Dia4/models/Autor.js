class Autor {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.libros = [];
    }
    agregarLibro(libro) {
        if (this.libros.includes(libro) == false) {
            this.libros.push(libro);
            libro.setAutor(this);
        }
    }
    eliminarLibro(libro) {
        const posicion = this.libros.indexOf(libro);
        if (posicion !== -1){
        this.libros.splice(posicion, 1);
        libro._autor = null;
        return libro;
        }
        return null;
    }
}

module.exports = Autor