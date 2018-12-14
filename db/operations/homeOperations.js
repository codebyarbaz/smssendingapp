const Contacts = require("../schemas/contactSchema");
const sentMessages = require("../schemas/sentMessageSchema");

const homeOperations = {
  fetchContacts(req, res, next) {
    Contacts.countDocuments()
      .then(totalContacts => {
        sentMessages
          .countDocuments()
          .then(totalSentMessages => {
            res.status(200).render("home", {
              title: "SMS Sending App",
              activeNav: "home",
              isAuth: req.session.isAuth,
              userName: req.session.name,
              totalContacts,
              totalSentMessages
            });
          })
          .catch(err => {
            next(err);
          });
      })
      .catch(err => {
        next(err);
      });
  }
};

module.exports = homeOperations;
