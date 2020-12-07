const mongoose = require('mongoose');

exports.URLSchema = new mongoose.Schema({
    _id: String,
    longURL: String,
}, {
    collection: 'myURL'
})
