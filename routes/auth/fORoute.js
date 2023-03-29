const express = require("express");
const router = express.Router();
//const FoneRegister = require(".../mo")

router.get("/fOneRegister", (req, res) => {
    res.render("registerFO")
});

module.exports = router;