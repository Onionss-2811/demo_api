const express = require('express');

const employeeRouter = require('express-promise-router')();

const employeeController = require('../controllers/employee.controller');

employeeRouter.route('/employees')
    .get(employeeController.getAllEmployee)
    .post(employeeController.addEmployee)

employeeRouter.route('/employees/:id')
    .get(employeeController.getEmployeeById)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)


module.exports = employeeRouter;