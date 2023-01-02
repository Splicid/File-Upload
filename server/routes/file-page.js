const Grid = require('gridfs-stream');
const databaseConnect   = require("./connection/db");

const file_upload = () => {
    const grid = new Grid(databaseConnect(), 'fs');
    const buffer = new Buffer.from("Hello World");
    grid.put(buffer, {metadata:{category: 'text'}, content_type: 'text'}, (err, fileinfo) => {
        if(err){
            console.log("Finished writing file to mongo")
        }
    });
}

module.exports = file_upload