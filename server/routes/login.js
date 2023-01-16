const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const User = require("../models/user");
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy
const mime = require('mime');
const { default: mongoose, Collection } = require('mongoose');
const ejs = require('ejs');
const fs = require('fs');
const { GridFSBucket, ObjectId } = require('mongodb');
const { deflateRawSync } = require("zlib");

const conn = mongoose.createConnection(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


router.use(bodyParser.urlencoded({ extended: true })); 
router.use(session({
    secret: process.env.SESSIONKEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }
}));

router.use(passport.initialize());
router.use(passport.session());

// Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate()));

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get('/', (req, res) => {
    if(!req.isAuthenticated()){
        res.render('login')
    } else{
        res.redirect('/login/dashboard')
    }
})

router.post('/logging', passport.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
	res.redirect('/login/dashboard')
});

router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    const fileNames = []
    const bucket = new GridFSBucket(conn.db, {bucketName: 'uploads'});
    const file = bucket.find({});
    await file.forEach(data => fileNames.push(data))
    res.render('file-page', {test: fileNames})
});

router.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.send("Secret Page")
});

router.post('/files/:id', (req, res) => {
    console.log('test')
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, {bucketName: 'uploads'});
    console.log(req.params.id)
    bucket.delete(ObjectId(req.params.id));
    res.redirect('back');
})

router.get('/download/:name', (req, res) => {
    const bucket = new GridFSBucket(conn.db, {bucketName: 'uploads'});
    const files = bucket.openDownloadStreamByName(req.params.name).pipe(res)
    res.set('Content-Type', mime.getType(req.params.name))
    res.set('Content-Disposition', 'attachment; filename="' + req.params.name + '"')
    //console.log(mime.getType(req.params.name))
})

router.get('/logout', function(req, res, next) {
    console.log("Logged out")
    req.logout( (err) => {
        if (err) {return next(err)}
        res.redirect('/');
    });
});

 //const data  = await accountCreation(req.body.username, req.body.password, "this is a test account")
module.exports = router;