const express = require('express');
const router = express.Router();
const NotificacionsController = require('../controllers/notificacions.controller');
const { isLoggedIn } = require('../lib/auth');
const photoNotificacionsController = require('../controllers/photoNotificacions.controller')

//viws notificacions
router.get('/', isLoggedIn, notificacionsController.getListNotificacions);
router.post('/notificacion', isLoggedIn,notificacionsController.postNotificacion);
router.get('/add', isLoggedIn,notificacionsController.getAddNotificacions);
router.get('/list-notificacions', isLoggedIn, notificacionsController.getListNotificacions);
router.get('/delete-notificacions/:id', isLoggedIn, notificacionsController.deleteNotificacion);
router.get('/edit-notificacions/:id', isLoggedIn,notificacionsController.getNotificacion);
router.post('/edit-notificacions/:id', isLoggedIn,notificacionsController.updateNotificacion);



//views photo
router.post('/photo-notificacion/:id', isLoggedIn, photoNotificacionsController.updatePhoto);

module.exports = router;