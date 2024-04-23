var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/user_ctrl')


router.get('/user/:id', ctrl.getUserById)
router.put('/user/:id', ctrl.putUser )
router.post('/user', ctrl.addUser)

module.exports = router;
