const express = require("express");
const router = express.Router();

router.get("/aOfficerRegister", (req, res) => {
    res.render("registerAO")
});

module.exports = router;