exports.Signup = function(req,  res, next){
  var Member = require('mongoose').model('Member');
  var member = new Member(req.body);

  member.save(function(err, docs){
    if(err){
      res.json({content:'Schema is Error file Controller is member, or is Model is member ',
     status:'ERROR 404'});
    }
    else{
      console.log('Save complete data'+ docs);
      res.json(member);
    }
  });
}
exports.logout = function(req, res,err){
    res.redirect('/');
}
exports.PageLogin = function (req, res, err) {
  return res.render('login.html');
}
exports.index = function(req, res,text){
  console.log(text);
   return res.render("register.html");
}
exports.getStatus = function(req, res, next){
  var Member = require('mongoose').model('Member');
  var member = new Member();
  var data = [{
    actor: member.schema.path('actor').enumValues
  }];
  res.json(data);
}
exports.Signin = function(req, res, next){
  var Member  = require('mongoose').model('Member');
  var session  = req.session;
  Member.find({username: req.body.username, password: req.body.password}, function(err, docs){
    session.member = docs;

  });
console.log(session.member);
}
