const express = require("express");
const router = express.Router();
const accountCreation = require("../controllers/accountCreation");
const bodyParser = require('body-parser');
const User = require("../models/user")
const crypto = require('crypto')


router.use(bodyParser.urlencoded({ extended: true })); 

router.get("/", (req, res) => {
    res.render("register")
})

router.post("/signup", function (req, res) {
    console.log(req.body)
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            res.json({success: false, message: "Account was not created " + err})
        } else{
            res.json({seccess: true, message: "Account was created"})
        }
    });
});



 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;