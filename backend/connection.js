const mongoose = require("mongoose");
const { mongoString } = require("./config");

const mongoURI = mongoString;

async function connectToMongoDb() {
  return mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("MongoDb connection erroe : ", err);
    });
}

module.exports = { connectToMongoDb };