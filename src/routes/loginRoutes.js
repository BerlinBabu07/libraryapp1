const express = require('express');
const loginRouter = express.Router();
function router (nav) {



    loginRouter.get('/',function(req,res){
    
        res.render("login",
        {
            nav:[{link:"/signup",name:"Signup"}],
            title:'LIBRARY',
            
        });
    
    });


    



    return loginRouter;

}


module.exports = router;