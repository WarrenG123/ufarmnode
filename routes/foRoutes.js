const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const Upload = require("../models/productModel");
const connectEnsureLogin = require("connect-ensure-login");
const flash = require('connect-flash');

router.get("/fodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    let farmerWard = req.user["ward"];
    console.log("The farmer ward is:", farmerWard);
    try {
        let activeFarmers = await User.countDocuments({ role: "uf", ward: farmerWard });
        let newUrbanFarmers = await User.find({ role: "uf", ward: farmerWard });

        res.render("foDash", {
            urbanFarmers: newUrbanFarmers,
            activeFarmers,
            farmerWard,
            message: req.flash('reg'),
        })
    }
    catch (error) {
        res.status(400).send("Could not find farmers in the database");
    }
});


router.get("/ufupload", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    let farmerWard = req.user["ward"];
    try{
        const upload = await Upload.find({ ward: farmerWard, status:"pending"});
        res.render('ufUpload', {data:upload});
    }
    catch (err) {
        res.send("Failed to retrieve uploads")
    }
   
});

router.get("/approval/:id", async(req, res) => {
    try{
        const item = await Upload.findOne({_id:req.params.id});
        res.render("approval", {product:item});
    }
    catch(err) {
        res.send("could not find uploads");
        console.log(err);
    }
})

router.post("/approval", async(req, res) => {
    try{
        await Upload.findOneAndUpdate({_id:req.query.id}, req.body);
        // console.log(req.body, "nothing here");
        res.redirect("/fodash");
    }
    catch(err) {
        res.send("Failed to update status");
        console.log(err);
    }
})





module.exports = router;