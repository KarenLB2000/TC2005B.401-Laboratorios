// Laboratorio 13.
const games  = [
    {titulo: "FE: Shadow Dragon and the Blade of Light"},
    {titulo: "FE Gaiden"},
    {titulo: "FE: Mystery of the Emblem"}
];

module.exports = class Game {

    // Constructor de la clase y propiedades del modelo.
    constructor(nuevo_juego) {
        this.titulo = nuevo_juego;
    }

    //Método para guardar de manera persistente el nuevo objeto. 
    save() {
        games.push(this);      
    }

    //Método para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return games;        
    }

}