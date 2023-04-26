const express = require("express");
const router = express.Router();
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

router.get("/edit_farmerOne/:id", async(req, res) => {
    try{
        const data = await User.findOne({_id:req.params.id});
        res.render("foEdit", {farmerOne:data});
    }
    catch(err) {
        res.send("could not find farmer one");
        console.log(err);
    }
})

router.post("/edit_farmerOne", async(req, res) => {
    try{
        await User.findOneAndUpdate({_id:req.query.id}, req.body);
        // console.log(req.body)
        req.flash('success', 'farmer one has been updated');
        res.redirect("/aodash");
    }
    catch(err) {
        res.send("Failed to update farmerOne details");
        console.log(err);
    }
})












// router.get("/fOneslist", async(req, res) =>{
//     try{
//         let items = await fOneSchema.find();
//         res.render("fOneslist", {farmerOnes:items});
//     }
//    catch(err) {
//     console.log(err)
//     res.send("failed to retrieve farmerOne details");
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