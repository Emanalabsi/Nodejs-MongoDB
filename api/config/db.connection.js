require("dotenv").config();

const mongoose = require("mongoose");

const dbConnection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected to database");
});

db.on("error", (error) => console.log(error));

module.exports = dbConnection;
