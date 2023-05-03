const express = require('express');
const Upload = require("../../models/productModel");
const User = require("../../models/userModel");
const Purchase = require("../../models/purchaseModel");
const connectEnsureLogin = require("connect-ensure-login");
const router = express.Router();


router.get("/products", async(req, res) => {
    try{
        let upload = await Upload.find({status:"Approved"})
         res.render("product",{
           products:upload,
           message: req.flash('bought'),
         })
        }
    catch(error) {
        res.status(400).send("Could not find products in the database");
    }
});

router.get("/bookings",  async (req, res) => {
    try {
        // const userId = req.user.userId;
        //product: { $in: userId }
        //connectEnsureLogin.ensureLoggedIn(),
        const purchases = await Purchase.find()
        .populate("user")
        .populate("product")
        .exec();
      res.render("bookings", { purchases});
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching purchase history");
    }
  });




module.exports = router;