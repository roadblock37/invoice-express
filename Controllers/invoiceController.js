const Invoice = require('../Models/invoiceModel');
const { StatusCodes } = require("http-status-codes");

const getAllInvoices = async (req, res) => {
    // DB query
    const allInvoices = await Invoice.find({});
    console.log(allInvoices)
    // return full list of all invoices
    res.status(StatusCodes.OK).json({allInvoices, count: allInvoices.length});
}
const getSingleInvoice = async (req, res) => {
    const {id: invoiceID} = req.params;
    // DB query to find invoice by id and update
    const invoice = await Invoice.findOne({_id: invoiceID});
    res.status(StatusCodes.OK).json({invoice});
}
const createInvoice = async (req, res) => {
    // DB query to create new Invoice
    const createInvoice = await Invoice.create(req.body);
    // return new invoice
    res.status(StatusCodes.OK).json({createInvoice});
}
const deleteInvoice = async (req, res) => {
    const {id: invoiceID} = req.params;
    // DB query to find invoice by id and update
    const invoice = await Invoice.findOneAndDelete({_id: invoiceID});
    res.status(StatusCodes.OK).json({invoice});
}
const updateInvoice = async (req, res) => {
    const {id: invoiceID} = req.params;
    // DB query to find invoice by id and update
    const invoice = await Invoice.findOneAndUpdate({_id: invoiceID}, req.body, {new: true, runValidators: true});
    res.status(StatusCodes.OK).json({invoice});
}

module.exports = {getAllInvoices, getSingleInvoice, createInvoice, deleteInvoice, updateInvoice}