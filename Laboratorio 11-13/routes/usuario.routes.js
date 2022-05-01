// Laboratorio 14.
const express = require('express');
const router = express.Router();

// Referencia a controlador.
const userController = require('../controllers/usuario_controllers'); 

router.get('/signup', userController.get_signup);
router.post('/signup', userController.post_signup);
router.get('/login', userController.get_login);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
module.exports = router;