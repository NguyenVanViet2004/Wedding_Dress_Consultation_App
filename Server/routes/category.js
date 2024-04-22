const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController')

router.get('/list-category', categoryController.getCategory);

router.post('/add-category', categoryController.createCategory);


module.exports = router