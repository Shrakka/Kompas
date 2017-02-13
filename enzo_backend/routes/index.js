var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/enzodb';
var db = mongoose.connect(url);

// Find models :
var users = mongoose.model('users', {firstname: String, lastname: String, age: Number, city: String, strict: false});

var places = mongoose.model('places', {name: String, city: String, adress: String, type: String, rating: Number});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KOMPAS Challenge' });
});

/* GET ROUTE TO USERS - MONGOOSE */
  router.get('/users', (req, res) => {
    users.find((err, users) => {
      var data = JSON.stringify(users);
      res.send(data);
    });
  });

/* GET ROUTE TO PLACES - MONGOOSE */
  router.get('/places', (req, res) => {
    places.find((err, places) => {
      var data = JSON.stringify(places);
      res.send(data);
    });
    
  });

/* POST ROUTE SENT FOR ADDING USERS - MONGOOSE */
router.post('/sent', (req,res) => {
  var data = req.body;
  var newUser = new users(data);
  newUser.save((err,user) => {
    if(err){
      console.log('error occured: ' + err)
      res.end();
    }else{
      console.log('saved: ' + user);
      res.end();
    }
  })
});

module.exports = router;

