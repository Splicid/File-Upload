const { mongoose } = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');


// This is the scchema for the database
const userSchema = new Schema({
    createdAt:{
        type: Date,
        default: () => Date.now(),
    },
    username : {type: String, unique: true, required:true}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema)


