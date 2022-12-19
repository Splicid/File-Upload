const express = require("express");
const router = express.Router();
const accountCreation = require("../controllers/accountCreation");
const bodyParser = require('body-parser');
const User = require("../models/user")

router.use(bodyParser.urlencoded({ extended: true })); 
router.post("/", async (req, res, next) => {
    res.render("register")
    next();
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;