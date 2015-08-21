
var express = require('express');
var router = express.Router();
var db = require('../db');

/*
router.get('/:userId', function(req, res, next){
        res.render('user',{
            id:req.params.userId,
            name:users[req.params.userId].name,
            email:users[req.params.userId].email
        });    
});
*/
/*
mandar name y email que que correspondan al user de la solicitud
*/

router.get('/userlist', function (req, res){
  var collection = db.get().collection('userlist');
  console.log("get: ");
  console.log(req.body);
  
  collection.find().toArray(function(err, docs) {
    console.log("entro");
    res.json(docs);
  })
  
  
});

router.post('/adduser', function(req, res) {
    
    
   db.get().collection('userlist').insert(req.body,function(err){
    console.log('entro|1111');
        res.send(



            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.delete('/deleteuser/:id', function(req, res) {

    var collection = db.get().collection('userlist');
    console.log(req.params.id);
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});




/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('user');
});


module.exports = router;

