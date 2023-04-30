const express = require("express");
const router = express.Router();
const Upload = require("../../models/productModel");
const Purchase = require("../../models/purchaseModel");
// const flash = require('connect-flash');


router.post("/buy", async (req, res) => {
  try {
    const productId = req.body.productId;
    const product = await Upload.findById(productId);
    res.render("cart", {
      data: [product],
    });
  } catch (error) {
    res.status(400).send("Could not find ");
  }
});

router.post("/order", async (req, res) => {
  try {
    const productId = req.body.productId;
    const product = await Upload.findById(productId);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    const purchase = new Purchase({
      user: req.user._id,
      product: product._id
    });
    await purchase.save();
    // res.send("Purchase completed successfully");
    // req.flash('bought', ' Your order has been successfully sent');
    res.redirect("/products")
  } catch (err) {
    console.error(err);
    res.status(400).send("Could not complete purchase, please ensure you are loggedd in");
  }
});


// router.get("/cart", async(req, res) => {
//     try{
//         const product = await Upload.find({status:"Approved"}) 
//         res.render("cart",{
//             data:product
//         })
//     }
//     catch (error) {

//     }
// });

module.exports = router;