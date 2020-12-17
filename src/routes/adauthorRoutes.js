const express = require('express');
const adauthorRouter = express.Router();
const authordata = require ('../model/authordata');


function router (nav) {


adauthorRouter.get('/',function(req,res){
    
    res.render("addauthor",
    {
        nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:'LIBRARY',
    
    });

});

adauthorRouter.post('/add',function(req,res){
    var itemauth = {
        authorname : req.body.authorname,
        bookname :  req.body.bookname,
        genre : req.body.genre,
        // bookname2 :  req.body.bookname2,
        image : req.body.image
     }
     var author = authordata(itemauth);
     author.save();
     res.redirect('/authors');
    
    // res.send("Sucess! Author has Added  ");
}); 

return adauthorRouter;
}

module.exports = router;