const { mongoose } = require('mongoose');
const { Schema } = mongoose;

// This is the scchema for the database
const userSchema = new Schema({
    createdAt:{
        type: Date,
        default: () => Date.now(),
    },
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false },
    body: String
});

const User = mongoose.model('User', userSchema)


module.exports = User;