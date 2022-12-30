const express           = require('express');
const databaseConnect   = require("./connection/db");
const dcrypter          = require("./controllers/encrypt");
const accountCreation   = require("./controllers/accountCreation");
const userLogin         = require("./routes/login");
const userRegister      = require('./routes/register');
const bodyParser        = require('body-parser');
const User              = require("./models/user")
const path              = require("path");
const app               = express();
const jwt               = require('jsonwebtoken');
const port              = 3000;
const passport          = require('passport');
const dotenv            = require('dotenv');
const connectEnsureLogin = require('connect-ensure-login')
dotenv.config();

app.use("/login", userLogin)
app.use("/register", userRegister)
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/style"))
app.use(express.json());

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//passport.js

const test = async () => {
    const Login = new User({ username: "luis", password: 'luis'})
    await Login.save()
}
//test()
app.get("/", (req, res) => {
    res.render("homepage")
})

// app.get('/login', (req, res) => {
//     res.render("index")
// });

// app.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
//     res.send("Secret Page")
// });


// app.post('/login', passport.authenticate('local', { failureRedirect: '/fail' }),  function(req, res) {
// 	console.log(req.user)
// 	res.redirect('/dashboard')
// });



app.listen(port, async () => {
    console.log(`We are currently running on ${port}`)
    databaseConnect();
})



//dcrypter.encryptor("Luis");

//accountCreation();

//testData();

//absolutePath = path.join( __dirname, "../", "/client/static/index.html");
//Used to find user if it exists
const testing = async () => {
    const findUser = await User.findOne({username: "luis"}).select('body');
    console.log(findUser)
}
//testing()