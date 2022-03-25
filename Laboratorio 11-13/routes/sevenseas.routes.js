// Laboratorio 11 - 17.
const express = require('express');
const router = express.Router();

// Referencia a controlador.
const SSController = require('../controllers/sevenseas_controllers'); 

router.use('/preguntas', SSController.preguntas);
router.use('/comic', SSController.comic);
router.use('/manga', SSController.manga);
router.get('/series', SSController.get_series);
router.post('/series', SSController.post_series);
router.use('/novela', SSController.novela);
router.get('/:id_novela', SSController.novela_filtrada);
router.use('/', SSController.home);

module.exports = router;