const express = require("express");
const router = express.Router();
const Upload = require("../../models/productModel");
const Purchase = require("../../models/purchaseModel");

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
  
//   router.post("/order", async(req, res) => {
//     try{
//         const productId = req.body.productId;
//         const product = await Upload.findById(productId);
//         const purchase = new Purchase({
//             user: req.user._id, // Assumes you have user authentication implemented
//             product: product._id
//           });
//           await purchase.save();
//     }
//     catch(err) {
//         res.status(400).send("Could not complete purchase");
//     }
//   })
  

 
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