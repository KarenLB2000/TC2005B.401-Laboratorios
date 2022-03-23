// Laboratorio 14.
const usuarios = [];

module.exports = class User {

    // Constructor de la clase y propiedades del modelo.
    constructor(n_username, n_email, n_phone, n_password) {
        this.username = n_username;
        this.email = n_email;
        this.phone = n_phone;
        this.password = n_password;
    }

    //Método para guardar de manera persistente el nuevo objeto. 
    save() {
        usuarios.push(this);      
    }

    static login(username, password) {
        return true;        
    }
}