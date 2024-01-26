const express = require('express');
const router = express.Router();
const productividadsController = require('../controllers/productividads.controller');
const { isLoggedIn } = require('../lib/auth');
const photoProductividadsController = require('../controllers/photoProductividads.controller')

//viws productividads
router.get('/', isLoggedIn, productividadsController.getListProductividads);
router.post('/productividads', isLoggedIn,productividadsController.postProductividad);
router.get('/add', isLoggedIn, productividadsController.getAddTeams);
router.get('/list-productividads', isLoggedIn,productividadsController.getListProductividads);
router.get('/delete-productividads/:id', isLoggedIn,productividadsController.deleteProductividad);
router.get('/edit-productividads/:id', isLoggedIn,productividadsController.getProductividad);
router.post('/edit-productividads/:id', isLoggedIn,productividadsController.updateProductividad);



//views photo
router.post('/photo-productividad/:id', isLoggedIn, photoProductividadsController.updatePhoto);

module.exports = router;