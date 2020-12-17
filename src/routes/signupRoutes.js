const express = require('express');
const signupRouter = express.Router();
function router (nav) {



    signupRouter.get('/',function(req,res){
    
        res.render("signup",
        {
            nav:[{link:"/login",name:"LogIn"}],
            title:'LIBRARY',
            
        });
    
    });


    return signupRouter;

}


module.exports = router;