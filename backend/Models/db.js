//e3nCKb07ckv0Ck7H
// mongodb+srv://student:e3nCKb07ckv0Ck7H@cluster0.etzo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })