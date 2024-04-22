const express = require('express');
const router = express.Router();
const dressController = require('../controller/dressController');
// http://0.0.0.0:3000/dress/list-dress
router.get('/list-dress', dressController.listDress);

router.post('/add-dress', dressController.createDress);

module.exports = router;