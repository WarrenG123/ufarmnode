const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");


router.get("/fodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    let farmerWard = req.user["ward"]; 
    console.log("The farmer ward is:", farmerWard);
    // if (req.user.role == "fo") {
        try {
            let activeFarmers = await User.countDocuments({role: "uf", ward: farmerWard});
            let newUrbanFarmers = await User.find({role: "uf", ward: farmerWard});

            res.render("foDash", {
                urbanFarmers: newUrbanFarmers,
                activeFarmers,
                farmerWard
            })
        } catch (error) { 
            res.status(400).send("Could not find farmers in the database");
        }
    // } else {
    //     res.redirect("/login");
    // }
})



module.exports = router;