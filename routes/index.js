var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//create
router.get('/create',async function(req, res, next) {
  const createdUser = await userModel.create({
        username:"rohit",
        age:20,
        name:"Rohit"
       });
 res.send(createdUser);
});

//read
router.get('/allusers',async function(req, res, next) {
 const allusers = await userModel.find();
 res.send(allusers);
});

// read one
router.get('/allusers1',async function(req, res, next) {
 const allusers = await userModel.findOne({username:"Rohit"});
 console.log(allusers);
 res.send(allusers);
});




//delete
router.get('/delete', async function(req, res, next) {
const deleteduser = await userModel.findOneAndDelete({
    username : "rohit"
  })
  console.log(deleteduser);
  res.send(deleteduser);
});

module.exports = router;
