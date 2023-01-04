const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const {upload} = require('../middleware/storage')
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const { GridFSBucket } = require('mongodb');
dotenv.config();

const conn = mongoose.createConnection(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

router.use(bodyParser.urlencoded({ extended: true })); 

router.post('/', upload.single('filename'), (req, res) => {
    
    res.end()
})

router.get('/', (req, res) => {
    console.log(upload)
    res.end()
})

router.get('/getting', async (req, res) => {
    console.log(gfs)
    res.end()
})



module.exports = router