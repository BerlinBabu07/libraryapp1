const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');


function router (nav) {
    // var books = [
    //     {
    //         title: 'Wings of Fire',
    //         author: 'APJ Abdul Kalam',
    //         genre: 'History',
    //         img: "apj.jpg"
    //     },
    //     {
    //         title: 'The Theory of Everything',
    //         author: 'Stephen Hawking',
    //         genre: 'Science',
    //         img: "theory.jpg"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J k Rowling',
    //         genre: 'Fantasy',
    //         img: "harry.jpg"
    //     },
    //     {
    //         title: 'Life of Pi',
    //         author: 'Yann Martel',
    //         genre: 'fiction',
    //         img: "pi.jpg"
    //     },
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img: "tom.jpg"
    //     }
    
    // ]



booksRouter.get('/',function(req,res){

    Bookdata.find()
    .then(function(books){

        res.render("books",
        {
            nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/addbook",name:"AddBook"},{link:"/authors",name:"Authors"}],
            title:'LIBRARY',
            books
        });
    

    })
    
  
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(singlebook){

        res.render("singlebook",
        {
            nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
            title:'LIBRARY',
            singlebook
        
        });

    })
  

});

// delete book
booksRouter.get('/delete/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOneAndDelete({_id:id})
    .then(function(err,sus){
        if (err){
            res.redirect('/books');
        }
        else{
            res.redirect('/books');
        }

    })
  

});


// booksRouter.get('/update',function(req,res){

//     Bookdata.find()
//     .then(function(books){

//         res.render("updatebook",
//         {
//             nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/addbook",name:"AddBook"},{link:"/authors",name:"Authors"}],
//             title:'LIBRARY',
//             books
//         });
    

//     })
    
  
// });

// update single book

booksRouter.get('/update',function(req,res){
    
    res.render("updatebook",
    {
        nav:[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
        title:'LIBRARY',
    
    });

});

booksRouter.get('/updatebook/:id',function(req,res){
    console.log(req.params.id);

    Bookdata.findById(req.params.id,function(err,Bookdata){
        if(err){
            console.log(err);
        }
        else{
            console.log(Bookdata);

            res.render('updatebook',{bookroutes:Bookdata});
        }
    });
});


// record edit update using post
booksRouter.post('/updatebook/:id', function(req, res) {
        console.log("id is"+ req.params.id);
        var mydata = {
            title : req.body.title,
            author : req.body.author,
            genre :  req.body.genre,
            image : req.body.image
         }
         Bookdata.findByIdAndUpdate(req.params.id, mydata,function(err){
            if(err){
                req.redirect('update/'+ req.params.id);
            }
            else{
                res.redirect('/books');
            }

        });


    });





    return booksRouter;

}


module.exports = router;