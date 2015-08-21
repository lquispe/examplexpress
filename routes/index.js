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
/*
router.get('/:userId', function(req, res, next){
        res.render('user',{
            id:req.params.userId,
            name:users[req.params.userId].name,
            email:users[req.params.userId].email
        });    
});*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/userlist', function (req, res){
  
  console.log("get:es el index ");
  console.log(req.body);
  res.json(users);
  
});

module.exports = router;
