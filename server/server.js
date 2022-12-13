const express = require('express');
const databaseConnect = require("./connection/db");
const User = require("./models/user")
const testData = require("./connection/look_up");
const app = express();
const port = 3000;
const date = new Date();


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`We are currently running on ${port}`)
})

const accountCreation = async () => {
    try{
        const Login = new User({
            username: "Test Username3",
            password: "User-Password",
            body: "This is a test user."
        })
        await Login.save()
    } catch(err){
        console.log(err)
    }

}
databaseConnect();
accountCreation();

//testData();