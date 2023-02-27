const mongoose = require("mongoose");

// schema for client and sender address
const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
  },
  city: { type: String },
  postCode: { type: String },
  country: { type: String },
});

// schema for items added to invoice
const ItemSchema = new mongoose.Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  total: { type: Number },
});

// schema for entire invoice
// will include nested schemas for address and items
const InvoiceSchema = new mongoose.Schema(
  {
    invoiceID: {
      type: String,
      required: [true, "Please provide an invoice ID"],
      default: "XB309",
    },

    paymentDue: {
      type: Date,
      required: [true, "Please provide a payment due date"],
    },

    description: {
      type: String,
      required: [true, "Please provide an invoice description"],
      maxLength: 50,
    },

    paymentTerms: {
      type: Number,
      enum: [1, 7, 30],
      required: [true, "Please select a payment term"],
    },

    clientName: {
      type: String,
      Required: [true, "Please Provide a client name"],
    },

    clientEmail: {
      type: String,
      default: "johnDoe@gmail.com",
    },

    status: {
      type: String,
      enum: ["pending", "paid", "draft"],
      default: "pending",
    },

    senderAddress: 
      [AddressSchema],

    clientAddress: 
      [AddressSchema],

    items: [ItemSchema],

    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
