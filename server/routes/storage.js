const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const {upload} = require('../middleware/storage')
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const { default: mongoose, Collection } = require('mongoose');
const { GridFSBucket } = require('mongodb');
dotenv.config();

router.post('/', upload.single('filename'), (req, res) => {
    res.redirect('back');
})

router.get('/download', (req, res) => {

    const files = bucket.openDownloadStreamByName('3987a162969935378c4f8cbe5d95bb46.svg').pipe(fs.createWriteStream('downloads/3987a162969935378c4f8cbe5d95bb46.svg'))
    let file = __dirname + '/3987a162969935378c4f8cbe5d95bb46.svg'
    console.log(path.join(__dirname, '..', files.path))
    const filePath = files.path
    res.download(path.join(__dirname, '..', filePath))
})



module.exports = router