// Laboratorio 11 - 17.
const express = require('express');
const router = express.Router();

// Referencia a controlador.
const SSController = require('../controllers/sevenseas_controllers'); 

router.use('/manga', SSController.manga);
router.use('/novela', SSController.novela);
router.use('/comic', SSController.comic);
router.get('/series', SSController.get_series);
router.post('/series', SSController.post_series);
router.use('/preguntas', SSController.preguntas);
router.use('/', SSController.home);

module.exports = router;