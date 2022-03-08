// Laboratorio 11 - 13.
const express = require('express');
const router = express.Router();

// Referencia a controlador.
const FEController = require('../controllers/fe_controllers'); 

router.get('/juegos', FEController.get_juegos);
router.post('/juegos', FEController.post_juegos);
router.use('/imagenes', FEController.imagenes);
router.use('/videos', FEController.videos);
router.use('/preguntas', FEController.preguntas);
router.use('/avogado6', FEController.avogado6);
router.use('/', FEController.inicio);

module.exports = router;