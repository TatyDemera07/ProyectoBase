const express = require("express");
const router = express.Router();
const tareasController = require('../controllers/tareas.controller');
//const { isLoggedIn } = require('../lib/auth');


//views tareas
router.get('/',  tareasController.getListTareas);
router.post('/tareas', tareasController.postTarea);
router.get('/add',  tareasController.getAddTareas);
router.get('/list-tareas', tareasController.getListTareas);
router.get('/delete-tareas/:id', tareasController.deleteTarea);
router.get('/edit-tareas/:id', tareasController.getTarea);
router.post('/edit-tareas/:id', tareasController.updateTarea);

module.exports = router;