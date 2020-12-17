const express = require('express');
const app =  new express();
const port = process.env.PORT || 5000;

const nav = [
    
    {
        link:'/home',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/addbook',name:'Addbook'
    },
    {
        link:'/updatebook',name:'Updatebook'
    },
    {
        link:'/addauthor',name:'Add-Author'
    }
];
      
const booksRouter = require ('./src/routes/bookRoutes') (nav)
const authorsRouter = require ('./src/routes/authorRoutes') (nav)
const loginRouter = require ('./src/routes/loginRoutes') (nav)
const signupRouter = require ('./src/routes/signupRoutes') (nav)
const adbookRouter = require ('./src/routes/adbookRoutes') (nav)
const adauthorRouter = require ('./src/routes/adauthorRoutes') (nav)


// app.use('/public/images', express.static(__dirname + '/public/images'));
app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',adbookRouter);
app.use('/addauthor',adauthorRouter);





app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",
    {
        nav:[{link:"/login",name:"LogIn"},{link:"/signup",name:"SignUp"}],
        title:'LIBRARY'
    });
});

app.get('/home',function(req,res){
    res.render("home",
     {
         nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
         title: 'LIBRARY'
         
     });
});
app.get('/updatebook',function(req,res){
    res.render("updatebook",
     {
         nav:[{link:"/home",name:"Home"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}],
         title: 'LIBRARY'
         
     });
});





app.listen(port,()=>{console.log("Server Ready at" + port)});