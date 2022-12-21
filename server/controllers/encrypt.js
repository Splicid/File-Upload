const bcrypt = require('bcrypt');
const saltRounds = 10;

//cuurently works need to find a way to organize this
const encryptor = async (password) => {
    console.log(password)
    bcrypt.hash(password, saltRounds).then(function(hash) {
        // Store hash in your password DB.
        console.log(hash)

        //Check if password equals 
        bcrypt.compare(password, hash).then(function(result) {
        // result == true
            console.log(result)
        });
    });
    
}

module.exports = {encryptor}