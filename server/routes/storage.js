const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const storagemiddle = require('../middleware/storage')

router.use(bodyParser.urlencoded({ extended: true })); 

router.post('/', storagemiddle.single('filename'), (req, res) => {
    console.log()
    res.end()
})

router.get('/', storagemiddle.single('filename'), (req, res) => {
    console.log()
    res.end()
})

router.get('/getting', (req, res) => {
    const file = gfs
})



module.exports = router