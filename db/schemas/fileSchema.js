const mongoose = require("../dbConfig/dbConnection");

const Schema = mongoose.Schema;

const fileSchema = new Schema({
  imageUrl: String
});

const Files = mongoose.model("Files", fileSchema);

module.exports = Files;
