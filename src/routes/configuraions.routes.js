const express = require('express');
const router = express.Router();
const ConfiguracionsController = require('../controllers/configuracions.controller');
const { isLoggedIn } = require('../lib/auth');
const photoConfiguracionsController = require('../controllers/photoConfiguracions.controller')

//viws configuracions
router.get('/', isLoggedIn, configuracionsController.getListConfiguracions);
router.post('/configuracion', isLoggedIn,configuracionsController.postConfiguracion);
router.get('/add', isLoggedIn,configuracionsController.getAddConfiguracions);
router.get('/list-configuracions', isLoggedIn, configuracionsController.getListConfiguracions);
router.get('/delete-configuracions/:id', isLoggedIn, configuracionsController.deleteConfiguracion);
router.get('/edit-configuracions/:id', isLoggedIn,configuracionsController.getConfiguracion);
router.post('/edit-configuracions/:id', isLoggedIn,configuracionsController.updateConfiguracion);



//views photo
router.post('/photo-configuracion/:id', isLoggedIn, photoConfiguracionsController.updatePhoto);

module.exports = router;