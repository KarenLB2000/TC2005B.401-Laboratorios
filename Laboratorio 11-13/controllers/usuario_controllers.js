// Laboratorio 13.
const path = require('path');

exports.get_signup = (request, response, next) => {
    response.render('signup.ejs');
};

exports.post_signup= (request, response, next) => {
    response.render('singup.ejs');
    response.redirect('/fe');
};

exports.login = (request, response, next) => {
    response.render('login.ejs');
};