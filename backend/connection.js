const mongoose = require("mongoose");
const { mongoURI } = require("./config");

const mongoURI = mongoURI;

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