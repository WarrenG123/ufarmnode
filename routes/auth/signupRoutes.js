const express = require('express');
const router = express.Router();
const User = require("../../models/userModel");  
const flash = require('connect-flash');

 
router.get("/signup", (req, res) => {
    res.render("signup");
})

router.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        let uniqueid = await User.findOne({ uniqueid: req.body.uniqueid });
        if (uniqueid) {
            return res.send("This unique id already exists");
        }
        else {
             User.register(user, req.body.password, (error) => {
                if (error) {
                    throw error
                };
                req.flash('success', 'You have been registered');
                res.redirect("login");
            })
        }
    }
    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page");
        console.log(error);     
    }
})



module.exports = router