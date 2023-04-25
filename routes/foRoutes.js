const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const Upload = require("../models/productModel");
const connectEnsureLogin = require("connect-ensure-login");


router.get("/ufupload", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    let farmerWard = req.user["ward"];
    try{
        const upload = await Upload.find({ward: farmerWard});
        res.render('ufUpload', {data:upload});
    }
    catch (err) {
        res.send("Failed to retrieve uploads")
    }
   
});

router.get("/fodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    let farmerWard = req.user["ward"];
    console.log("The farmer ward is:", farmerWard);
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
});





module.exports = router;