const passport          = require('passport');
const LocalStrategy     = require('passport-local').Strategy


passport.use(new LocalStrategy(function verify(username, password, cb) {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', async (err, hashedPassword) => {
        if (err) { return next("err") }
        const Login = new User({
            email: req.body.email,
            password: "hashedPassword",
        }, function(err) {
            if (err) { return next("err"); }
        })
        await Login.save( (err) => {
            if(err){
                console.log("error")
            }else {
                res.render("index")
            }
        })
    })
}))

//app.use(passport.initialize());
//app.use(passport.session());