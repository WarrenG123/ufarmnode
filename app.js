const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require("mongoose");
//require("dotenv").config();  //
const config =  require("./config/database")



const homeRoute = require("./routes/homeRoute");
const prodRoute = require("./routes/products/prodRoute");
const cartRoute = require("./routes/products/cartroute");
const upRoute = require("./routes/products/uploadRoute");
const fOneRegister = require("./routes/auth/fORoute");
const uFregister = require("./routes/auth/uFroutes");
const aORegister = require("./routes/auth/aORoute")



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
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));






app.use(homeRoute);
app.use(prodRoute);
app.use(cartRoute);
app.use(upRoute);
app.use(fOneRegister);
app.use(uFregister);
app.use(aORegister);




app.listen(3001, () => console.log('listening on port 3001'));  //this should always be the last line in your server file 