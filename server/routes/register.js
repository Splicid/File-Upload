const express = require("express");
const router = express.Router();
const accountCreation = require("../controllers/accountCreation");
const bodyParser = require('body-parser');
const User = require("../models/user")
const crypto = require('crypto')


router.use(bodyParser.urlencoded({ extended: true })); 

router.post("/", async (req, res) => {
    res.render("register")
    //console.log(req.body.username)
    //console.log(req.body.password)
})

// Not finished 
router.post("/signup", (req, res) => {
    res.render("register")
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async (err, hashedPassword) => {
        if (err) {return next(err)}
        const Login = new User({
            email: req.body.email,
            password: 'hashedPassword',
        }, function(err) {
            if (err) { return next(err); }
        })
        await Login.save()
    })
    console.log(req.body.email, 'hashedPassword')
})

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;