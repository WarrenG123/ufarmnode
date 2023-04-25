const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
const Upload = require("../models/productModel");
const multer = require("multer");
const flash = require('connect-flash');


let storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, "public/uploads") },
    filename: (req, file, cb) => { cb(null, file.originalname) }
});
let imageUpload = multer({ storage: storage });
//, connectEnsureLogin.ensureLoggedIn()
router.get("/ufdash", (req, res) => {
    res.render("ufDash")
});
//to get upload form
router.get("/upload", (req, res) => {
    res.render("upload")
});

router.post("/upload", imageUpload.single("productimage"), (req, res) => {
    try {
        console.log(req.body);
        const upload = new Upload(req.body);
        upload.productimage = req.file.originalname
        upload.save();
        req.flash('success', 'product has been uploaded');
        res.redirect("/ufdash");
    }
    catch (error) {
        res.send("failed to display image ${error} ")
    }
})


module.exports = router;