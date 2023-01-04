const crypto = require('crypto');
const multer  = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const dotenv = require('dotenv');
const databaseConnect = require("../connection/db");
const { default: mongoose } = require('mongoose');
const { GridFSBucket } = require('mongodb');
dotenv.config();

const storage = new GridFsStorage({
    url: process.env.URL,
    options: {
      useNewUrlParser: true
    },
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err)
          }
          const filename = file.originalname
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          }
          resolve(fileInfo)
        })
      })
    }
  })


const upload = multer({ storage });

module.exports = {upload}