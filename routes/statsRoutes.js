const expres = require("express");

const statsRouter = expres.Router();

const statsOperations = require("../db/operations/statsOperations");

statsRouter.get("/", (req, res, next) => {
  statsOperations.getMessages(req, res, next);
});

module.exports = statsRouter;
