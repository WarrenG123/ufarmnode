const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        default: null
    },
    secondname: {
        type: String,
        trim: true,
        default: null
    },
    dob: {
        type: String,
        trim: true,
        default: null
    },
    gender: {
        type: String,
        trim: true,
        default: null
    },
    phonenumber: {
        type: String,
        trim: true,
        unique: true,
        default: null
    },
    NIN: {
        type: String,
        trim: true,
        default: null
    },
    address: {
        type: String,
        trim: true,
        default: null
    },
    residence: {
        type: String,
        trim: true,
        default: null
    },
    time: {
        type: String,
        trim: true,
        default: null
    },
    ward: {
        type: String,
        trim: true,
        default: null
    },
    activities: {
        type: String,
        trim: true,
        default: null
    },
    dreg: {
        type: String,
        trim: true,
        default: null
    },
    uniqueid: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: null
    }
})
userSchema.plugin(passportLocalMongoose, {usernameField:"uniqueid"});
module.exports = mongoose.model("User", userSchema);