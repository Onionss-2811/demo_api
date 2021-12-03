const express = require('express');

const customerRouter = require('express-promise-router')();
const auth = require('../middleware/auth.middleware');

const customerController = require('../controllers/customer.controller');
const {validateBody, schemas} = require('../middleware/validate.middleware')

customerRouter.route('/customers')
    .get(auth(['President', 'Manager', 'Leader', 'Staff']), customerController.getAllCustomer)
    .post(auth(['President', 'Manager', 'Leader', 'Staff']), validateBody(schemas.customerSchema), customerController.addCustomer)

    customerRouter.route('/customers/:id')
    .get(auth(['President', 'Manager', 'Leader', 'Staff']), customerController.getCustomerById)
    .put(auth(['President', 'Manager', 'Leader']), validateBody(schemas.customerSchema), customerController.updateCustomer)
    .delete(auth(['President', 'Manager', 'Leader']), customerController.deleteCustomer)


module.exports = customerRouter;