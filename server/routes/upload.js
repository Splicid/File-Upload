const express = require("express");
const router = express.Router();
const upload = require('../middleware/storage');


router.use(bodyParser.urlencoded({ extended: true })); 


router.post('/getting', upload.single('filename'), (req, res) => {
    res.end();
})