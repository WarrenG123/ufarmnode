const express = require("express");
const router = express.Router();
const flash = require('connect-flash');

router.get("/uFarmerRegister", (req, res) => {
    res.render("registerUF")
});

router.post("/uFarmerRegister", async (req, res) => {
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
                req.flash('success', ' Urban farmer has been registered');
                res.redirect("/fodash")
            })
        }
    }
    catch(error){
        res.status(400).send("sorry cannot access the urban farmer register form at the moment");
        console.log(error);     
    }
})

module.exports = router;