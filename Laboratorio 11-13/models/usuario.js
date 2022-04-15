// Laboratorio 18.
const db = require('../util/database');
const bcrypt = require('bcryptjs');

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
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado)=>{
                return db.execute(
                    'INSERT INTO usuario(nombre, email, username, password) VALUES(?,?,?,?)',
                    [this.nombre, this.email, this.username, password_cifrado]);
            }).catch((error)=>{
                console.log(error);
            }); 
    }

    static login(username, password) {
        return true;        
    }
}