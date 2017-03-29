exports.NumberAdd = function(req, res, next){
  var Phone = require('mongoose').model('Phone');
  var phone = new Phone(req.body);
  phone.save(function(err, docs){
    if(err){
      console.error('ERROR ! file controllrt phone mongoose function save');
      return next(err);
    }
    else{
      res.json(docs);
    }
  });
}
exports.SeachPhoneById = function(req, res, next, Phonenumber){
  var ObjectId = require('mongodb').ObjectID;
  var Phone = require('mongoose').model('Phone');
  Phone.find({author: new ObjectId(Phonenumber) },function(err, docs){
    if(err){
          res.json([{content:"Don't  remove data by phone id "+ Phonenumber}]);
    }
    else{
      res.json(docs);
    }
  });
}
exports.update = function(req, res, next){
  var Phone = require('mongoose').model('Phone');
  var ObjectId = require('mongodb').ObjectID;
  Phone.findOneAndUpdate({_id: new ObjectId(req.body.id) }, req.body ,
    function(err, docs){
        if(err){
          res.json([ {
    content: "Can not by get",
    description: "You can perminssion by post only",
    status: "Not flud 404"
  }]);
        }
      else {
        res.json(docs);
      }
  });
}
exports.delete = function(req, res, next, id){

  var Phone = require('mongoose').model('Phone');
  var ObjectId = require('mongodb').ObjectID;
  
  Phone.remove({_id: new ObjectId(id)},
  function(err){
    if(err){
      res.json([{content:"Don't  remove data by phone id "+ id}]);
    }
    else{
      res.json([{content:"Remove complete"}])
    }
  });
}
