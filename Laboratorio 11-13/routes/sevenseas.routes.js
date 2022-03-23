// Laboratorio 11 - 17.
const express = require('express');
const router = express.Router();

// Referencia a controlador.
const SSController = require('../controllers/sevenseas_controllers'); 

router.get('/manga', SSController.get_manga);
router.post('/manga', SSController.post_manga);
router.get('/novela', SSController.get_novela);
router.post('/novela', SSController.post_novela);
router.get('/comic', SSController.get_comic);
router.post('/comic', SSController.post_comic);
router.use('/preguntas', SSController.preguntas);
router.use('/', SSController.inicio);

module.exports = router;