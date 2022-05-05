// Laboratorio 17.
const db = require('../util/database');

module.exports = class Novela {
    // Constructor de la clase y propiedades del modelo.
    constructor(nuevo_titulo, nueva_descripcion, nuevo_autor, nuevo_artista, nueva_imagen, nuevo_isbn) {
        this.titulo = nuevo_titulo;
        this.descripcion = nueva_descripcion;
        this.autor = nuevo_autor;
        this.artista = nuevo_artista;
        this.imagen = nueva_imagen;
        this.imagen = nueva_imagen;
        this.isbn = nuevo_isbn;
    }

    // Método para devolver los objetos (novelas) en base de datos.
    static fetchAll() {
        return db.execute(
            'SELECT * FROM novela');
    }

    // Método para devolver un objeto (novela) de la base de datos, dado un parámetro.
    static fetchOne(id_novela) {
        return db.execute('SELECT * FROM novela WHERE id_novela=?', [id_novela]);
    }

    // Método para devolver un objeto cuyos atributos hagan match o coincidan con cierto valor.
    static match(valor) {
        return db.execute('SELECT * FROM novela WHERE (titulo LIKE ? OR descripcion LIKE ? OR autor LIKE ? OR artista LIKE ?)', 
            ['%' + valor + '%', '%' + valor + '%', '%' + valor + '%', '%' + valor + '%']);
    }
}