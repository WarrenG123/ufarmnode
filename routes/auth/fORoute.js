const express = require("express");
const router = express.Router();

router.get("/fOneRegister", (req, res) => {
    res.render("registerFO")
});

module.exports = router;