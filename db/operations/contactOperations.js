const Contacts = require("../schemas/contactSchema");

const contactOperations = {
  addContact(contactDetails, res, next) {
    Contacts.create(contactDetails)
      .then(contact => {
        res.status(200).send("New Contact Added");
      })
      .catch(err => {
        next(err);
      });
  },
  fetchContacts(req, res, next) {
    let currentPage = req.query.page || 1;
    const Items_Per_Page = 4;
    const Skip_Items = (currentPage - 1) * Items_Per_Page;
    Contacts.countDocuments()
      .then(totalDocs => {
        Contacts.find()
          .sort("-_id")
          .skip(Skip_Items)
          .limit(Items_Per_Page)
          .then(contacts => {
            let totalPages = totalDocs / Items_Per_Page;
            res.status(200).render("contacts", {
              title: "Contacts",
              activeNav: "contacts",
              isAuth: req.session.isAuth,
              userName: req.session.name,
              contacts,
              currentPage,
              totalPages: Math.ceil(totalPages)
            });
          })
          .catch(err => {
            next(err);
          });
      })
      .catch(err => {
        next(err);
      });
  },
  deleteContact(ID, res, next) {
    Contacts.findByIdAndRemove(ID)
      .then(result => {
        return res.status(200).send("Deleted");
      })
      .catch(err => {
        next(err);
      });
  },
  sendMessage(ID, req, res, next) {
    Contacts.findById(ID)
      .then(contact => {
        if (!contact) {
          throw new Error("Contact doesn't exists!");
        }
        res.status(200).render("send-message", {
          title: "Send Message",
          activeNav: "send-message",
          isAuth: req.session.isAuth,
          userName: req.session.name,
          contact
        });
      })
      .catch(err => {
        next(err);
      });
  }
};

module.exports = contactOperations;
