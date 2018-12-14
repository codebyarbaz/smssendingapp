const express = require("express");

const contactRouter = express.Router();

const contactOperations = require("../db/operations/contactOperations");

contactRouter.get("/", (req, res, next) => {
  contactOperations.fetchContacts(req, res, next);
});

contactRouter.get("/add-contact", (req, res, next) => {
  res.status(200).render("add-contact", {
    title: "Add New Contact",
    activeNav: "add-contact",
    isAuth: req.session.isAuth,
    userName: req.session.name
  });
});

contactRouter.get("/send-message/:ID", (req, res, next) => {
  let ID = req.params.ID;
  contactOperations.sendMessage(ID, req, res, next);
});

contactRouter.post("/add-contact", (req, res, next) => {
  let contactDetails = req.body;
  contactOperations.addContact(contactDetails, res, next);
});

contactRouter.post("/delete", (req, res, next) => {
  contactOperations.deleteContact(req.body.contactID, res, next);
});

module.exports = contactRouter;
