const express = require("express");

const FileRouter = express.Router();

const uploadFile = require("../utils/multer");
const fileOperations = require("../db/operations/fileOperations");

FileRouter.get("/", (req, res, next) => {
  res.render("upload", {
    title: "File Upload",
    activeNav: "upload",
    isAuth: req.session.isAuth,
    userName: req.session.name
  });
});

FileRouter.get("/getImages", (req, res, next) => {
  fileOperations.getImages(req, res, next);
});

FileRouter.post("/", uploadFile.any(), (req, res, next) => {
  const imagesData = [];
  req.files.forEach(file => {
    const obj = {};
    obj.imageUrl = "assets/images/" + file.filename;
    imagesData.push(obj);
  });
  fileOperations.addFiles(imagesData, req, res, next);
});

FileRouter.post("/deleteImage", (req, res, next) => {
  fileOperations.deleteImage(req.body, res, next);
});

module.exports = FileRouter;
