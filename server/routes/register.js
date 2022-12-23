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
    console.log(req.body.email)

        //console.log(req.body.email, 'hashedPassword')
})

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;