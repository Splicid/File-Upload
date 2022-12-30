import { createReadStream } from 'fs';

const Grid = require('gridfs-stream');
const databaseConnect   = require("./connection/db");

const gfs = Grid(databaseConnect(),)

const writestream = gfs.createWriteStream({
    filename: 'test_file.txt'
})
