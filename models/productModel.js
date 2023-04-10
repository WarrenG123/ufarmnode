const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
    productimage: {
        type: String
    },
    amount: {
        type: Number
    }
})
module.exports = mongoose.model("Upload", uploadSchema);