const express = require('express');

const usersRouter = require('express-promise-router')();

const userController = require('../controllers/user.controller');
const {validateBody, schemas} = require('../middleware/validate.middleware')

usersRouter.route('/users')
    .post(validateBody(schemas.userSchema), userController.addUser)

usersRouter.route('/login')
    .post(userController.login)


module.exports = usersRouter;