const mongoose = require("mongoose");
const { mongoString } = require("./config");

async function connectToMongoDb() {
  try {
    await mongoose.connect(mongoString, {
    });
    console.log("Database Connected");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
  }
}

module.exports = { connectToMongoDb };