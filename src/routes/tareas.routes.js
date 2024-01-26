const express = require("express");
const router = express.Router();
//const tareasController = require('../controllers/tareas.controller');
const { isLoggedIn } = require('../lib/auth');
const photoTareasController = require('../controllers/photoTareas.controller')

//views tareas
router.get('/', isLoggedIn, TareasController.getListTareas);
router.post('/tarea', isLoggedIn, tareasController.postTareas);
router.get('/list-tareas', isLoggedIn, tareasController.getListTareas );
router.get('/delete-tareas/:id',isLoggedIn, tareasController.deleteTarea);
router.get('/edit-tareas/:id',isLoggedIn, tareasController.getTarea);
router.post('/edit-tareas/:id',isLoggedIn, tareasController.updateTarea);


module.exports = router;