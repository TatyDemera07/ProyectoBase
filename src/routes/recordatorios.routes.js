const express = require("express");
const router = express.Router();
//const recordatoriosController = require('../controllers/recordatorios.controller');
//const { isLoggedIn } = require('../lib/auth');
//const photoRecordatoriosController = require('../controllers/photoRecordatorios.controller')


router.get('/', isLoggedIn, recordatoriosController.getListRecordatorios);
router.post('/recordatorios', isLoggedIn,recordatoriosController.postRecordatorio);
router.get('/add', isLoggedIn, recordatoriosController.getAddRecordatorios);
router.get('/list-recordatorios', isLoggedIn,recordatoriosController.getListRecordatorios);
router.get('/delete-recordatorios/:id', isLoggedIn,recordatoriosController.deleteRecordatorio);
router.get('/edit-recordatorios/:id', isLoggedIn,recordatoriosController.getRecordatorio);
router.post('/edit-recordatorios/:id', isLoggedIn,recordatoriosController.updateRecordatorio);

//views profile

router.post('/photo-recordatorio/:id', isLoggedIn, photoRecordatoriosController.updatePhoto);



module.exports = router;
