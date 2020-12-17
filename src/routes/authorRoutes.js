const express = require('express');
const authorsRouter = express.Router();
const authordata = require('../model/authordata');

function router (nav) {
    // var authors = [
    //     {   
    //         title : 'APJ Abdul Kalam',
    //         genre: 'History',
    //         img: "apj.jpg"
    //     },
    //     {   
    //         title : 'J k Rowling',
    //         genre: 'Fantasy',
    //         img: "jk.jpg"
    //     },
    //     {
    //         title : 'William Shakespeare',
    //         genre: 'History',
    //         img: "ws.jpg"
    //     },
    //     {
    //         title : 'Leo Tolstoy',
    //         genre: 'Novel',
    //         img: "leo.jpg"
    //     },
    //     {
    //         title : 'Charles Dickens',
    //         genre: 'Fiction',
    //         img: "cd.jpg"
    //     }
    
    // ]



authorsRouter.get('/',function(req,res){
    authordata.find()
    .then(function(authors){
    
    res.render("authors",
    {
        nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addauthor",name:"Add Authors"}],
        title:'LIBRARY',
        authors
    });

    })

});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    authordata.findOne({_id:id})
    .then(function(author){
    res.render("author",
    {
        nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:'LIBRARY',
        author 
    
    });

})

});

authorsRouter.get('/delete/:id',function(req,res){
    const id = req.params.id;
    authordata.findOneAndDelete({_id:id})
    .then(function(err,sus){
        if (err){
            res.redirect('/authors');
        }
        else{
            res.redirect('/authors');
        }

    })
  

});

    return authorsRouter;

}


module.exports = router;