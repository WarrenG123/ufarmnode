const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
// const connectEnsureLogin = require("connect-ensure-login");

// connectEnsureLogin.ensureLoggedIn(),
router.get("/aodash",  async(req, res)=>{
    // if (req.user.role == "ao") {
        try {
            let activeFarmers = await User.countDocuments({role: "fo"});
            let data = await User.find({role: "fo"});

            res.render("aoDash", {
                data: data,
                activeFarmers,
            })
        } catch (error) { 
            res.status(400).send("Could not find farmers in the database");
        }
    //  } else {
    //      res.redirect("/login");
    //  }
});





module.exports = router;