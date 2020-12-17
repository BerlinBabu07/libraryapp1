const mongoose = require('mongoose');
mongoose.connect ('mongodb+srv://newuser:newuser@cluster1.58hjp.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

// schema definition
const authorSchema = new Schema({

    authorname : String,
    bookname : String,
    genre : String,
    
    image : String

});

var authordata = mongoose.model('authordata',authorSchema);

 module.exports = authordata;