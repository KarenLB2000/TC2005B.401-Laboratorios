// Laboratorio 14.
const express = require('express');
const router = express.Router();

// Referencia a controlador.
const UserController = require('../controllers/usuario_controllers'); 

router.get('/signup', UserController.get_signup);
router.post('/signup', UserController.post_signup);
router.use('/login', UserController.login);

module.exports = router;