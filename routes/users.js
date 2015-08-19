var express = require('express');
var router = express.Router();
var users ={
    user1:{
        name:'pepe',
        email:'pepe@gmail.com'
    },
    user2:{
        name:'pablo',
        email:'pablo@gmail.com'
    }
};
router.get('/:userId', function(req, res, next){
        res.render('user',{
            id:req.params.userId,
            name:users[req.params.userId].name,
            email:users[req.params.userId].email
        });    
});
/*
mandar name y email que que correspondan al user de la solicitud
*/
router.get('/userlist', function (req, res){
  
  console.log("get: ");
  console.log(req.body);
  res.json(users);
  
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user');
});


module.exports = router;

