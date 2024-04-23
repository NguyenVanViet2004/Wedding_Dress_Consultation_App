var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/bill_ctrl')


router.get('/bill/:id', ctrl.getBillById)
router.get('/bill', ctrl.getBill)
router.put('/bill/:id', ctrl.putBill)
router.post('/bill', ctrl.addBill)
router.delete('/bill/:id', ctrl.deleteBill)

module.exports = router;
