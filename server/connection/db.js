const { mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const main = async () => {
    const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.f4werh5.mongodb.net/?retryWrites=true&w=majority`;

    const conn = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result ) => console.log('connected to db' + result))
        .catch((err) => console.log(err))
}



module.exports = main;