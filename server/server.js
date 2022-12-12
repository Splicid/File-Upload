const express = require('express');
const databaseConnect = require("./connection/db");
const testData = require("./connection/look_up");
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`We are currently running on ${port}`)
})

databaseConnect();

testData();