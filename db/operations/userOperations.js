const User = require("../schemas/userSchema");

const passwordHash = require("password-hash");

const userOperations = {
  createAccount(userDetails, res, next) {
    userDetails.password = passwordHash.generate(userDetails.password);
    User.find({ username: userDetails.username })
      .then(docs => {
        if (docs.length) {
          return res.status(200).send("exist");
        }
        User.create(userDetails)
          .then(result => {
            return res.status(201).send("Account Created!");
          })
          .catch(err => {
            next(err);
          });
      })
      .catch(err => {
        next(err);
      });
  },
  fetchAccount(userDetails, req, res, next) {
    User.find({ username: userDetails.username })
      .then(user => {
        if (!user.length) {
          return res.status(200).send("Username doesn't exists!");
        }
        const verify = passwordHash.verify(
          userDetails.password,
          user[0].password
        );
        if (verify) {
          req.session.isAuth = true;
          req.session.name = user[0].name;
          return res.status(200).send("LoginSuccess");
        } else {
          return res.status(200).send("Password is incorrect!");
        }
      })
      .catch(err => {
        next(err);
      });
  }
};

module.exports = userOperations;
