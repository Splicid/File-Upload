const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const {upload} = require('../middleware/storage')
const dotenv = require('dotenv');
const fs = require('fs');
const { default: mongoose, Collection } = require('mongoose');
const { GridFSBucket } = require('mongodb');
dotenv.config();

const conn = mongoose.createConnection(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const bucket = new GridFSBucket(conn, {bucketName: 'uploads'});


router.use(bodyParser.urlencoded({ extended: true })); 

router.post('/', upload.single('filename'), (req, res) => {
    
    res.end()
})

router.get('/', (req, res) => {
    console.log(upload)
    res.end()
})

router.get('/download', (req, res) => {

    const files = bucket.openDownloadStreamByName('3987a162969935378c4f8cbe5d95bb46.svg').pipe(fs.createWriteStream('./3987a162969935378c4f8cbe5d95bb46.svg'))
    res.set('Content-Type', 'attachment');
    res.end()
})



module.exports = router