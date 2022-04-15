// Laboratorio 11 - 17.
const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

// Referencia a controlador.
const SSController = require('../controllers/sevenseas_controllers'); 

router.use('/preguntas', isAuth, SSController.preguntas);
router.use('/comic', isAuth, SSController.comic);
router.get('/series_mod', isAuth, SSController.gmod_comic);
router.post('/series_mod', isAuth, SSController.pmod_comic);
router.use('/manga', isAuth, SSController.manga);
router.get('/series', isAuth, SSController.get_series);
router.post('/series', isAuth, SSController.post_series);
router.use('/novela', isAuth, SSController.novela);
router.get('/:id_novela', isAuth, SSController.novela_filtrada);
router.use('/', isAuth, SSController.home);

module.exports = router;