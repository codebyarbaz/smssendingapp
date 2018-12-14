const mongoose = require("../dbConfig/dbConnection");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fname: String,
  lname: String,
  number: Number
});

const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = Contacts;
