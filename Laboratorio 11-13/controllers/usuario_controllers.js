// Laboratorio 18.
const User = require('../models/usuario');
const bcrypt = require('bcryptjs');


exports.get_login = (request, response, next) => {
    if (request.session.isLoggedIn == true) {
        response.redirect('/sevenseas');
    } else {
        response.render('login.ejs'); 
    }  
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
            response.redirect('/usario/login');
        });
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

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};
