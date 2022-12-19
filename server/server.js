const express = require('express');
const databaseConnect = require("./connection/db");
const testData = require("./connection/look_up");
const dcrypter = require("./controllers/encrypt");
const accountCreation = require("./controllers/accountCreation");
const userLogin = require("./routes/login");
const userRegister = require('./routes/register');
const bodyParser = require('body-parser');
const initializePassport = require('./passport-config')
const path = require("path");
const app = express();
const port = 3000;
const passport = require('passport')


app.use("/login", userLogin)
app.use("/register", userRegister)
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, async () => {
    console.log(`We are currently running on ${port}`)
    databaseConnect();
})


//dcrypter.encryptor("Luis");

//accountCreation();

//testData();

//absolutePath = path.join( __dirname, "../", "/client/static/index.html");
//Used to find user if it exists
// const findUser = await User.findOne({username: "Test Username2"}).select('body');
// console.log(findUser)