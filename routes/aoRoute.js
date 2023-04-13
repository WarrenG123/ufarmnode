const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const connectEnsureLogin = require("connect-ensure-login");


//connectEnsureLogin.ensureLoggedIn(), put back later
router.get("/aodash",  (req, res)=>{
    res.render("aoDash");
})



module.exports = router;