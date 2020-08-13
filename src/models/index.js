const config = require("../config/config.js");

const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.url;
db.issues = require("./Issue.model.js")(mongoose);
db.projects = require("./Project.model.js")(mongoose);

module.exports = db;
