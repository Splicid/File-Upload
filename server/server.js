const express           = require('express');
const session           = require("express-session");
const databaseConnect   = require("./connection/db");
const dcrypter          = require("./controllers/encrypt");
const accountCreation   = require("./controllers/accountCreation");
const userLogin         = require("./routes/login");
const userRegister      = require('./routes/register');
const bodyParser        = require('body-parser');
const User              = require("./models/user")
const path              = require("path");
const app               = express();
const port              = 3000;
const flash             = require('connect-flash');
const LocalStrategy     = require('passport-local').Strategy
const passport          = require('passport');
const dotenv            = require('dotenv');
const connectEnsureLogin = require('connect-ensure-login')
dotenv.config();

//app.use("/login", userLogin)
app.use(flash());
app.use("/register", userRegister)
app.set("view engine", "ejs")
app.use(express.json());

app.use(session({
    secret: process.env.SESSIONKEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate()));

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//passport.js

const test = async () => {
    const Login = new User({ username: "luis", password: 'luis'})
    await Login.save()
}
//test()
app.get("/", (req, res) => {
    res.render("index")
})

// app.get('/login', (req, res) => {
//     res.render("index")
// });

app.post('/login', passport.authenticate('local', { failureRedirect: '/fail'}),  function(req, res) {
	console.log(req.user)
	res.redirect('/dashboard')
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

app.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
     and your session expires in ${req.session.cookie.maxAge} 
     milliseconds.<br><br>
     <a href="/logout">Log Out</a><br><br>
     <a href="/secret">Members Only</a>`);
  });

app.listen(port, async () => {
    console.log(`We are currently running on ${port}`)
    databaseConnect();
})

app.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.send("Secret Page")
  });


//dcrypter.encryptor("Luis");

//accountCreation();

//testData();

//absolutePath = path.join( __dirname, "../", "/client/static/index.html");
//Used to find user if it exists
const testing = async () => {
    const findUser = await User.findOne({username: "luis"}).select('password');
    console.log(findUser)
}
testing()