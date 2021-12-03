const express = require("express");
const logRouter = require('express-promise-router')();
const logController = require('../controllers/log.controller');


logRouter.get('/logs', logController.getAllLogs)
logRouter.get("/logs/level/:level",logController.getLogsByLevel)
logRouter.get("/logs/time",logController.getLogsByTimePeriod)
logRouter.put("/logs/:id", logController.updateLogLevel);

module.exports = logRouter;