const express = require("express");
const router = express.Router();

router.get("/uFarmerRegister", (req, res) => {
    res.render("registerUF")
});

module.exports = router;