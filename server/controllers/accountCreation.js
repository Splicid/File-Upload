const User = require("../models/user")

// this function creates the account and saves it to the mongodb
const accountCreation = async (username, password) => {
    try{
        const Login = new User({
            username: username,
            password: password,
        })
        await Login.save()
    } catch(err){
        return err
    }
}

module.exports = accountCreation;