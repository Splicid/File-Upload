const express = require("express");
const router = express.Router();
const accountCreation = require("../controllers/accountCreation");
const bodyParser = require('body-parser');
const User = require("../models/user")

router.use(bodyParser.urlencoded({ extended: true })); 
router.post("/", async (req, res) => {
    res.render("login")
})

router.get("/UserPage", (req, res) => {
    //res.render("test", {data: "testasdadas"})
})

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;