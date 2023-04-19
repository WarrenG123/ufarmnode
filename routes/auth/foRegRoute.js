const express = require("express");
const router = express.Router();
// const fOneSchema = require("../../models/registerFoModel");
// const connectEnsureLogin = require("connect-ensure-login");
const User = require("../../models/userModel");  
const flash = require('connect-flash');

router.get("/fOneRegister", (req, res) => {
    res.render("registerFO")
});

router.post("/fOneRegister", async (req, res) => {
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
                req.flash('success', 'farmer one has been registered');
                res.redirect("/aodash")
            })
        }
    }
    catch(error){
        res.status(400).send("Unable to Register farmer One");
        console.log(error);     
    }
})














// router.get("/fOneslist", async(req, res) =>{
//     try{
//         let items = await fOneSchema.find();
//         res.render("fOneslist", {farmerOnes:items});
//     }
//    catch(err) {
//     console.log(err)
//     res.send("failed to retrieve student details");
//    }
// });


// router.post("/fOneRegister", async(req, res) => {
//     try{
//         const fORegister = new fOneSchema(req.body);
//         await fORegister.save();
//         res.redirect("/fOneslist");
//     }
//     catch(err) {
//         console.log(err);
//     }
// });












module.exports = router;