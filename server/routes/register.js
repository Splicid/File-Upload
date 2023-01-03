const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const User = require("../models/user")


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

module.exports = router;