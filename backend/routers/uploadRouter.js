// import multer from "multer";
// import express from "express";
// import { isAuth } from "../utils.js";
const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();
const isAuth = require("../utils.js");


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

uploadRouter.post("/", isAuth, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

// export default uploadRouter;
module.exports = uploadRouter;
