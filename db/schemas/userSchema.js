const mongoose = require("../dbConfig/dbConnection");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
