const express = require("express");
const router = express.Router();
const accountCreation = require("../controllers/accountCreation");
const bodyParser = require('body-parser');
const User = require("../models/user")
const crypto = require('crypto')

router.use(bodyParser.urlencoded({ extended: true })); 

router.post("/", async (req, res, next) => {
    res.render("register")
    //console.log(req.body.username)
    //console.log(req.body.password)
})

// Not finished 
router.get("/signup", (req, res) => {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req,body.password, salt, 310000, 32, 'sha256', (err, hashedPassword) => {
        if (err) {return next(err)}

    })
})

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;