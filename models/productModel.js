const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
    productimage: {
        type: String
    },
    productname: {
        type: String,
        trim: true
    },
    ward: {
        type: String
    },
    date: {
        type: String
    },
    unitprice: {
        type: Number,
        trim: true
    },
    quantity: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    payMthd: [{
        type: String
    }],
    delivery: [{
        type: String
    }],
    pType: {
        type: String
    },
    status: {
        type: String,
        trim: true,
        default:'pending'
    }
})
module.exports = mongoose.model("Upload", uploadSchema);