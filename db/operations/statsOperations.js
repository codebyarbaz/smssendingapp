const sentMessages = require("../schemas/sentMessageSchema");

const statsOperations = {
  getMessages(req, res, next) {
    let currentPage = req.query.page || 1;
    const Items_Per_Page = 4;
    const Skip_Items = (currentPage - 1) * Items_Per_Page;
    sentMessages
      .countDocuments()
      .then(totalDocs => {
        sentMessages
          .find()
          .sort("-_id")
          .skip(Skip_Items)
          .limit(Items_Per_Page)
          .then(messages => {
            let totalPages = totalDocs / Items_Per_Page;
            res.status(200).render("stats", {
              title: "Messages Stats",
              activeNav: "stats",
              isAuth: req.session.isAuth,
              userName: req.session.name,
              messages: messages,
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
  }
};

module.exports = statsOperations;
