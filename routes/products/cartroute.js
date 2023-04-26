const express = require("express");
const router = express.Router();
const Upload = require("../../models/productModel")

router.get("/cart", async(req, res) => {
    try{
        const product = await Upload.find({status:"Approved"})
        res.render("cart",{
            data:product
        })
    }
    catch (error) {

    }
});

module.exports = router;