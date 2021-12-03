const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerNumber: Number,
    customerName: String,
    contactLastName: String,
    contactFirstName: String,
    phone: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    salesRepEmployeeNumber: Number,
    credit: Number,
});

const customer = mongoose.model('customer', customerSchema);
module.exports = customer;