// aceessing mongoose package
const mongoose = require('mongoose');
mongoose.connect ('mongodb+srv://newuser:newuser@cluster1.58hjp.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

// schema definition
const BookSchema = new Schema({

    title : String,
    author : String,
    genre : String,
    image : String

});

var Bookdata = mongoose.model('bookdata',BookSchema);

 module.exports = Bookdata;