const mongoose = require('mongoose');

const URLSchema = require('../schema/url.schema').URLSchema;

const URLModel = mongoose.model("URL", URLSchema);

function creatURL(url) {
    if (!url._id) {
        url._id = makeid(10);
    }
    return URLModel.create(url);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function findAllURL() {
    return URLModel.find({}).exec();
}

function findURLById(id) {
    return URLModel.findById(id).exec();
}

function updateURL(id, newURL) {
    return URLModel.findByIdAndUpdate(id, newURL).exec();
}

function deleteURL(id) {
    return URLModel.findByIdAndDelete(id).exec();
}

module.exports = {
    creatURL,
    findAllURL,
    findURLById,
    updateURL,
    deleteURL,
}