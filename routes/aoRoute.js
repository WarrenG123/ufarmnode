const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const connectEnsureLogin = require("connect-ensure-login");

// 
router.get("/aodash", connectEnsureLogin.ensureLoggedIn(), async(req, res)=>{
        try {
            let activeFarmers = await User.countDocuments({role: "fo"});
            let data = await User.find({role: "fo"});

            res.render("aoDash", {
                data: data,
                activeFarmers,
                message: req.flash('success') 
            })
        } catch (error) { 
            res.status(400).send("Could not find farmers in the database");
        }
});





module.exports = router;