const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const connectEnsureLogin = require("connect-ensure-login");
const Upload = require("../models/productModel");


router.get("/ufupload"), async(req, res) => {
    try{
        const upload = await Upload.find();
        console.log(upload);
        res.render('ufUpload', {data:upload});
    }
    catch (err) {
        res.send("Failed to retrieve uploads")
    }
   
};





router.get("/fodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    let farmerWard = req.user["ward"];
    console.log("The farmer ward is:", farmerWard);
    // if (req.user.role == "fo") {
    try {
        let activeFarmers = await User.countDocuments({ role: "uf", ward: farmerWard });
        let newUrbanFarmers = await User.find({ role: "uf", ward: farmerWard });

        res.render("foDash", {
            urbanFarmers: newUrbanFarmers,
            activeFarmers,
            farmerWard
        })
    }
    catch (error) {
        res.status(400).send("Could not find farmers in the database");
    }
    // } else {
    //     res.redirect("/login");
    // }
});





module.exports = router;