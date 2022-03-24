// Laboratorio 17.
const User = require('../models/usuario');


exports.get_login = (request, response, next) => {
    response.render('login.ejs'); 
};

exports.login = (request, response, next) => {
    response.redirect('/sevenseas'); 
};

exports.get_signup = (request, response, next) => {
    response.render('signup.ejs');
};

exports.post_signup= (request, response, next) => {
    const usuario = new User(request.body.nombre, request.body.email, request.body.username, request.body.password);
    usuario.save()
    .then(()=> {
        response.redirect('/usuario/login'); 
    }).catch((error)=>{
        console.log(error);
    });
};