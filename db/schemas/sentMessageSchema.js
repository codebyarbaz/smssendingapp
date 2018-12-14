const mongoose = require("../dbConfig/dbConnection");

const Schema = mongoose.Schema;

const sentMessageSchema = new Schema(
  {
    name: String,
    number: Number,
    message: String
  },
  { timestamps: true }
);

const sentMessages = mongoose.model("sentMessages", sentMessageSchema);

module.exports = sentMessages;
