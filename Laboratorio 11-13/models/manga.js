// Laboratorio 17.
const db = require('../util/database');

module.exports = class Manga {
    // Constructor de la clase y propiedades del modelo.
    constructor(nuevo_titulo, nueva_descripcion, nuevo_autor, nuevo_artista, nueva_imagen) {
        this.titulo = nuevo_titulo;
        this.descripcion = nueva_descripcion;
        this.autor = nuevo_autor;
        this.artista = nuevo_artista;
        this.imagen = nueva_imagen;
    }

    // Método para guardar nueva serie(manga) en base de datos.  
    save() {
        return db.execute('INSERT INTO manga (titulo, descripcion, autor, artista, imagen) VALUES (?, ?, ?, ?, ?)', 
            [this.titulo, this.descripcion, this.autor, this.artista, this.imagen]);
    }

    // Método para devolver los objetos (mangas) en base de datos.
    static fetchAll() {
        return db.execute(
            'SELECT * FROM manga');
    }
}