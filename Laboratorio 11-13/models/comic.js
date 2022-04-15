// Laboratorio 17.
const db = require('../util/database');

module.exports = class Comic {
    // Constructor de la clase y propiedades del modelo.
    constructor(nuevo_titulo, nueva_descripcion, nuevo_autor, nuevo_artista, nueva_imagen, nuevo_genero) {
        this.titulo = nuevo_titulo;
        this.descripcion = nueva_descripcion;
        this.autor = nuevo_autor;
        this.artista = nuevo_artista;
        this.imagen = nueva_imagen;
        this.genero = nuevo_genero;
    }

    // Método para actualizar los objetos (cómics) en base de datos.
    update(seriesID) {
        return db.execute(
            'UPDATE comic SET titulo = ?, descripcion = ?, autor = ?, artista = ?, imagen = ?, genero = ? WHERE id_comic = ?',
                [this.titulo, this.descripcion, this.autor, this.artista, this.imagen, this.genero, seriesID]);
    }

    // Método para devolver los objetos (mangas) en base de datos.
    static fetchOne() {
        return db.execute(
            'SELECT * FROM comic LIMIT 1');
    }
}