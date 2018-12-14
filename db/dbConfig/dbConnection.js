const dbConfig = require("./dbConfig");
const mongoose = require("mongoose");

mongoose.connect(
  dbConfig.dbURI,
  { useNewUrlParser: true },
  () => {
    console.log("DB Connected!");
  }
);

module.exports = mongoose;
