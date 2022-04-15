// Laboratorio 18.
const User = require('../models/usuario');
const bcrypt = require('bcryptjs');


exports.get_login = (request, response, next) => {
    response.render('login.ejs', {
        login : request.session.isLoggedIn ? request.session.isLoggedIn : ''
    }); 
};

exports.login = (request, response, next) => {
    User.findOne(request.body.username)
        .then(([rows, fielData])=>{

            if (rows.length < 1) {
                return response.redirect('/usuario/login');
            }

            const user = new User(rows[0].nombre, rows[0].email,
                rows[0].username, rows[0].password);

            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.username = user.username;
                        return request.session.save(err => {
                            response.redirect('/sevenseas');
                        });
                    }
                    response.redirect('/usario/login');
                }).catch(err => {
                    response.redirect('/usario/login');
                });
        }).catch((error)=>{
            console.log(error)
        });
};

exports.get_signup = (request, response, next) => {
    response.render('signup.ejs', {
        login : request.session.isLoggedIn ? request.session.isLoggedIn : ''
    });
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