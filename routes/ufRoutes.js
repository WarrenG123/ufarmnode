const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const Upload = require("../models/productModel");
const multer = require("multer");

//, connectEnsureLogin.ensureLoggedIn()
let storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, "public/uploads") },
    filename: (req, file, cb) => { cb(null, file.originalname) }
});
let imageUpload = multer({ storage: storage });
//to get upload form
router.get("/upload", (req, res) => {
    res.render("upload")
});

router.post("/upload", imageUpload.single("productimage"), (req, res) => {
    // console.log(req.file);
    try {
        console.log(req.body);
        const upload = new Upload(req.body);
        upload.productimage = req.file.originalname
        upload.save();
        res.redirect("/ufdash");
    }
    catch (error) {
        res.send("failed to display image ${error} ")
    }
    //res.render("aoDash");
})


module.exports = router;