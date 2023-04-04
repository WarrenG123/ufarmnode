const express = require("express");
const router = express.Router();
const fOneSchema = require("../../models/registerFoModel");

router.get("/fOneRegister", (req, res) => {
    res.render("registerFO")
});
router.get("/fOneslist", async(req, res) =>{
    try{
        let items = await fOneSchema.find();
        res.render("fOneslist", {farmerOnes:items});
    }
   catch(err) {
    console.log(err)
    res.send("failed to retrieve student details");
   }
});


router.post("/fOneRegister", async(req, res) => {
    try{
        const fORegister = new fOneSchema(req.body);
        await fORegister.save();
        res.redirect("/fOneslist");
    }
    catch(err) {
        console.log(err);
    }
});












module.exports = router;