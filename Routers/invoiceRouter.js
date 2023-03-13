const express = require("express");
const router = express.Router();

const {getAllInvoices,getSingleInvoice,createInvoice,updateInvoice,deleteInvoice} = require('../Controllers/invoiceController');

router.route('/').get(getAllInvoices).post(createInvoice);
router.route('/:id').get(getSingleInvoice).delete(deleteInvoice).patch(updateInvoice);

module.exports = router;


