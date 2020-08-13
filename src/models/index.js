const config = require("../config/config.js");

const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.url;
db.issues = require("./issue.model.js")(mongoose);
db.projects = require("./project.model.js")(mongoose);

module.exports = db;
