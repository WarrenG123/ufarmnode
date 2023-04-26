const express = require('express');
const Upload = require("../../models/productModel");
const router = express.Router();


router.get("/products", async(req, res) => {
    try{
        let upload = await Upload.find({status:"Approved"})
         res.render("product",{
           products:upload
         })
        }
    catch(error) {
        res.status(400).send("Could not find products in the database");
    }
});

module.exports = router;