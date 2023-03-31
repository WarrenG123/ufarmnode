const mongoose = require("mongoose");

const fOneSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true
    },
    secondname: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
        trim: true
    },
    gender: {
        type: String,
    },
    phonenumber:{
        type: String,
        trim: true
    },
    NIN: {
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    residencetype:{
        type: String,
        trim: true
    },
    time:{
        type: Number,
        trim: true
    },
    ward:{
        type: String,
        trim: true
    },
    activities:{
        type: String,
        trim: true
    },
    dreg:{
        type: String,
        trim: true
    },
    uniquenumber:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    }
})

module.exports = mongoose.model("FoneRegister", fOneSchema);