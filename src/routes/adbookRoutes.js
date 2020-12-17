const express = require('express');
const adbookRouter = express.Router();
const Bookdata = require ('../model/Bookdata');


function router (nav) {


adbookRouter.get('/',function(req,res){
    
    res.render("addbook",
    {
        nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:'LIBRARY',
    
    });

});

adbookRouter.post('/add',function(req,res){
    var item = {
       title : req.body.title,
       author : req.body.author,
       genre :  req.body.genre,
       image : req.body.image
    }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');
    
    // res.send("hey..Well Done, New Book is CREATED");
}); 

return adbookRouter;
}

module.exports = router;