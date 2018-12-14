const express = require("express");

const loginRouter = express.Router();

const userOperations = require("../db/operations/userOperations");

loginRouter.get("/login", (req, res, next) => {
  res.status(200).render("login", {
    title: "Login Account",
    activeNav: "login",
    isAuth: false
  });
});

loginRouter.get("/register", (req, res, next) => {
  res.status(200).render("register", {
    title: "Create Account",
    activeNav: "register",
    isAuth: false
  });
});

loginRouter.post("/register", (req, res, next) => {
  const userDetails = req.body;
  userOperations.createAccount(userDetails, res, next);
});

loginRouter.post("/login", (req, res, next) => {
  const userDetails = req.body;
  userOperations.fetchAccount(userDetails, req, res, next);
});

module.exports = loginRouter;
