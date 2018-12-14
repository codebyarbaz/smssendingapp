const expres = require("express");

const sendMessageRouter = expres.Router();

const sentMessagesOperations = require("../db/operations/sentMessageOperations");

// Loading SMS API
const Nexmo = require("nexmo");
const nexmo = new Nexmo({
  apiKey: "363b57ef",
  apiSecret: "HyTf4LSMvgBw4PiV"
});

sendMessageRouter.post("/", (req, res, next) => {
  const from = "Arbaz Tyagi";
  const to = "91" + req.body.number;
  const text = req.body.message;
  nexmo.message.sendSms(from, to, text, (err, result) => {
    if (err) {
      next(err);
    } else {
      if (result.messages[0].status == 0) {
        let MsgRecord = {
          name: req.body.fname + " " + req.body.lname,
          number: req.body.number,
          message: req.body.message
        };
        sentMessagesOperations.addMsgRecord(MsgRecord, req, res, next);
      } else if (result.messages[0].status == 29) {
        res.status(200).send("Please add number to the naxmo dashboard.");
      } else {
        res.status(200).send("Failed to send sms.");
      }
    }
  });
});

module.exports = sendMessageRouter;
