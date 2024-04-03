var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get("/", function(req, res) {
//   req.session.ban = true;
//   res.render("index");
// });


router.get("/checkban", function(req, res) {
  if(req.session.ban===true){
  res.send("You are banned");
}
else{
  res.send("not banned");
}
});

//remove ban
router.get("/removeban", function(req, res) {
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("ban removed");
  });
});

//cookie
router.get("/",function(req,res){
  res.cookie("age",25);
  res.render("index");
});
router.get("/read",function(req,res){
  // req.cookies("age",25);
  console.log(req.cookies.age);
  res.send("check");
});

router.get("/delete",function(req,res){
  // req.cookies("age",25);
  console.log(req.cookies.age);
  res.clearCookie("age");
  res.send("clear hogyi");
});

module.exports = router;
