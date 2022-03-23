// Laboratorio 14.
const db = require('./util/database');

module.exports = class User {

    // Constructor de la clase y propiedades del modelo.
    constructor(n_nombre, n_email, n_username, n_password) {
        this.nombre = n_nombre;
        this.email = n_email;
        this.username = n_username;
        this.password = n_password;
    }

    //Método para guardar nuevo usuario en base de datos. 
    save() {
        return db.execute(
            'INSERT INTO usuario(nombre, email, username, password) VALUES(?,?,?,?)',
            [this.nombre, this.email, this.username, this.password]);    
    }

    static login(username, password) {
        return true;        
    }
}