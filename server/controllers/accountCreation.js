const User = require("../models/user")

// this function creates the account and saves it to the mongodb
const accountCreation = async (username) => {
    try{
        const Login = new User({
            email: username,
        })
        await Login.save()
        return true
    } catch(err){
        return false
    }
}

module.exports = accountCreation;