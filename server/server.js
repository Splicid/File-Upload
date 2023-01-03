const express           = require('express');
const databaseConnect   = require("./connection/db");
const userLogin         = require("./routes/login");
const userRegister      = require('./routes/register');
const storageUser       = require('./routes/storage')
const bodyParser        = require('body-parser');
const app               = express();
const port              = 3000;
const dotenv            = require('dotenv');
dotenv.config();

// Configure Middleware
app.use("/login", userLogin)
app.use("/register", userRegister)
app.use("/upload", storageUser)
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/style"))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.render("homepage")
})


app.listen(port, async () => {
    console.log(`We are currently running on ${port}`)
    databaseConnect();
})
