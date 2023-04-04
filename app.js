const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require("mongoose");
const config =  require("./config/database"); //require("dotenv").config();  //
const bodyParser = require("body-parser");
const session = require("express-session");

const User = require("./models/userModel"); //for session to work fine

const homeRoute = require("./routes/homeRoute");
const prodRoute = require("./routes/products/prodRoute");
const cartRoute = require("./routes/products/cartroute");
const upRoute = require("./routes/products/uploadRoute");
const fOneRegister = require("./routes/auth/fORoute");
const uFregister = require("./routes/auth/uFroutes");
const aORegister = require("./routes/auth/aORoute");
const tryRoute = require("./routes/tryRoute"); //with steven
const signupRoutes = require("./routes/signupRoutes"); //with steven
const authRoutes = require("./routes/authRoutes"); //with steven
const passport = require('passport');



app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.json()); //support parsing of application/json type post data
app.use(bodyParser.urlencoded({extended:true})); //support parsing of application /x-www-form-urlencoded post data

//creating a connection between controller and database
mongoose.connect(config.database, {
 useNewUrlParser: true, 
 useUnifiedTopology: true  
});
const db = mongoose.connection;
//checking if db has connected
db.once("open", () => {
console.log("connected to db");
})
db.on("error", (err) => {
console.error(err);
})




app.set("view engine", "pug");
app.set("views",[ path.join(__dirname, "views"), path.join(__dirname, "views/auth"), path.join(__dirname, "views/products")]);

app.use(express.static(path.join(__dirname, "public")));






app.use(homeRoute);
app.use(prodRoute);
app.use(cartRoute);
app.use(upRoute);
app.use(fOneRegister);
app.use(uFregister);
app.use(aORegister);


// work with steven
app.use(tryRoute); 
app.use(signupRoutes);
app.use(authRoutes);






app.get("*", (req, res) => {
    res.status(404).send("page does not exist");
})


app.listen(3001, () => console.log('listening on port 3001'));  //this should always be the last line in your server file 