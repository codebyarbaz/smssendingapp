const sentMessages = require("../schemas/sentMessageSchema");

const sentMessagesOperations = {
  addMsgRecord(MsgRecord, req, res, next) {
    sentMessages
      .create(MsgRecord)
      .then(msgRecord => {
        return res.status(200).send("sent");
      })
      .catch(err => {
        next(err);
      });
  }
};

module.exports = sentMessagesOperations;
