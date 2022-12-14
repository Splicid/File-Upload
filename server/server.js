const express = require('express');
const databaseConnect = require("./connection/db");
const testData = require("./connection/look_up");
const dcrypter = require("./controllers/encrypt");
const accountCreation = require("./controllers/accountCreation");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); 
absolutePath = path.join( __dirname, "../", "/client/static/index.html");

console.log(absolutePath)

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})

app.post('/test', (req, res) => {
    console.log(req.body)
  })

app.listen(port, async () => {
    console.log(`We are currently running on ${port}`)
    databaseConnect();
    const data  = await accountCreation("luisabreu","password", "this is a test account")
})



//dcrypter.encryptor("Luis");

//accountCreation();

//testData();

//Used to find user if it exists
// const findUser = await User.findOne({username: "Test Username2"}).select('body');
// console.log(findUser)