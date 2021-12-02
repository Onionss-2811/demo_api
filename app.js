const express = require('express');
const BodyParser = require("body-parser");
const securityApp = require("helmet");
const mongoose = require("mongoose");
const logger = require('morgan')

// set up mongodb by mongoose
mongoose.connect("mongodb://localhost/nodejs_day16")
    .then(() => console.log('✅ connect database success'))
    .catch((error) => console.error('❌ connect database fail'))


const employeeRouter = require('./routes/employee.route');

const app = express(); 

app.use(securityApp());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(logger('dev'));

// Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK!'
    })
})

app.use(employeeRouter);

// Catch 404 Errors and forward them to error handler

// Error handler function

// listening port
const port = app.get('port') || 3000;
app.listen(port, ()=>console.log(`Server is listening on port ${port}`))
