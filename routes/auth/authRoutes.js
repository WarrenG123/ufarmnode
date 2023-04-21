const express = require('express');
const router = express.Router();
const User = require("../../models/userModel");
const passport = require('passport');

router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), async (req, res) => {
    req.session.user = req.user
    let userExist = await User.findOne({ uniqueid: req.user.uniqueid, password: req.user.password });
    console.log("This user exists", userExist);
    console.log("This is the user session:", req.session);
    if(req.user.role == "ao" && userExist){
        res.redirect("/aodash");
    }
     else if(req.user.role == "uf" && userExist){
        res.redirect("/ufdash");
    }
     else if(req.user.role == "fo" && userExist){
        res.redirect("/fodash");
    }
     else if(req.user.role == "cus" && userExist){
        res.redirect("/");
    }
    else {res.send("You are not registered")};
})

router.post("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy((error) => {
            if (error) {
                res.status(400).send("unable to log out user");
            } else {
                return res.redirect("/login");
            }
        })
    }
})




module.exports = router