const User = require("../models/user")

// this function creates the account and saves it to the mongodb
const accountCreation = async (username, password, description) => {
    try{
        const Login = new User({
            username: username,
            password: password,
            body: description
        })
        await Login.save()
        return true
    } catch(err){
        return false
    }
}

module.exports = accountCreation;