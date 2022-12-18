const express = require("express");
const router = express.Router();
const accountCreation = require("../controllers/accountCreation");
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true })); 

router.post("/", async (req, res, next) => {
    
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;