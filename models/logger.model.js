const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggerSchema = new Schema({
  level: { type: String, require: true, enum: ["info", "warning", "error"] },
  message: { type: String, require: true },
  user: { type: String, require: true },
  action: { type: String, require: true },
  timestamp: { type: Date, default: Date.now },
});
const logger = mongoose.model("Logger", loggerSchema);
module.exports = logger;
