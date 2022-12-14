const express = require('express');
const databaseConnect = require("./connection/db");
const testData = require("./connection/look_up");
const dcrypter = require("./controllers/encrypt")
const accountCreation = require("./controllers/accountCreation")
const app = express();
const port = 3000;
const date = new Date();


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`We are currently running on ${port}`)
    databaseConnect();
})

accountCreation("luisabreu","password", "this is a test account")


//dcrypter.encryptor("Luis");

//accountCreation();

//testData();

//Used to find user if it exists
// const findUser = await User.findOne({username: "Test Username2"}).select('body');
// console.log(findUser)