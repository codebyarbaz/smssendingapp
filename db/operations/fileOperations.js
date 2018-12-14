const path = require("path");
const fs = require("fs");

const Files = require("../schemas/fileSchema");

const fileOperations = {
  addFiles(images, req, res, next) {
    Files.create(images)
      .then(result => {
        res.status(200).send("Upload Done!");
      })
      .catch(err => {
        next(err);
      });
  },
  getImages(req, res, next) {
    Files.find()
      .then(files => {
        res.render("images", {
          title: "Images",
          activeNav: "images",
          isAuth: req.session.isAuth,
          images: files
        });
      })
      .catch(err => {
        next(err);
      });
  },
  deleteImage(imageDetails, res, next) {
    Files.findByIdAndRemove(imageDetails.imageID)
      .then(result => {
        // console.log(
        //   path.join(__dirname, "..", "..", "public/", imageDetails.imagePath)
        // );
        fs.unlink(
          path.join(__dirname, "..", "..", "public/", imageDetails.imagePath),
          err => {
            if (err) {
              res.status(200).send("Error in deleting image.");
            } else {
              res.status(200).send("Done");
            }
          }
        );
      })
      .catch(err => {
        next(err);
      });
  }
};

module.exports = fileOperations;
