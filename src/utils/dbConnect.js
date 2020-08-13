const db = require("../models");

const dbConnect = async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
