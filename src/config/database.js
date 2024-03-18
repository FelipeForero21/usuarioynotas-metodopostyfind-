const mongoose = require('mongoose');
let User;

const conecctDatabase = async () => {
    try {
        if (!User) {
            User = mongoose.model('User', require('../models/userModel').schema);
        }
        await mongoose.connect('mongodb+srv://elipeforero21:elipeforero21@cluster0.laag0sa.mongodb.net/')
        .then (() => console.log('Connected to'))
        .catch ((err) => console.log(err));
    } catch (error) {
        console.error('Failed to connect to', error);;
        process.exit(1);
    }
};

module.exports = conecctDatabase;