const express = require("express");

const homeRouter = express.Router();

const homeOperations = require("../db/operations/homeOperations");

homeRouter.get("/", (req, res, next) => {
  homeOperations.fetchContacts(req, res, next);
});

module.exports = homeRouter;
