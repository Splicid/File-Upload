const { mongoose } = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    date: Date,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false },
    body: String
});

const User = mongoose.model('User', userSchema)


module.exports = User;