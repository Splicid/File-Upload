const express = require('express');
const databaseConnect = require("./connection/db");
const User = require("./models/user")
const testData = require("./connection/look_up");
const dcrypter = require("./controllers/encrypt")
const app = express();
const port = 3000;
const date = new Date();


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`We are currently running on ${port}`)
})

// this function creates the account and saves it to the mongodb
const accountCreation = async () => {
    try{
        const Login = new User({
            username: "Test Username4",
            password: "User-Password",
            body: "This is a test user."
        })
        await Login.save()
    } catch(err){
        console.log(err)
    }


}
//dcrypter.encryptor("Luis");
databaseConnect();

accountCreation();

//testData();

//Used to find user if it exists
// const findUser = await User.findOne({username: "Test Username2"}).select('body');
// console.log(findUser)