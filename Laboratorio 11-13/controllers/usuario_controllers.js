// Laboratorio 14.
const path = require('path');

exports.get_signup = (request, response, next) => {
    response.render('signup.ejs');
};

exports.post_signup= (request, response, next) => {
    response.render('signup.ejs');
    response.redirect('/login');
};

exports.get_login = (request, response, next) => {
    response.render('login.ejs'); 
};

exports.login = (request, response, next) => {
    response.redirect('/fe'); 
};