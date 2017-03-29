exports.CreateUser = function(req, res, next){
  var User = require('mongoose').model('User');

  var user = new User(req.body);

  user.save(function(err, docs){
    if(err){
      console.error("ERROR mongoose function save on file controller user line 8 don't save ");
      res.json([{
        content:"Moongoosd Error don't save ",
        status: 'Not flud 404'
      }]);
    }
    else {
      res.json(docs);
    }
  });
}
exports.getShowStatus = function(req, res, next){
  var content = [
    {
      content: 'Can not by get',
      description:'You can perminssion by post only',
      status:'Not flud 404'
    }
  ];
  res.json(content);
}
exports.getLocation = function(req, res ,next){
  return res.render('locations.html');
}
exports.ByLocation = function(req, res, next){



    var request = require('request');
  var gps = request('http://maps.googleapis.com/maps/api/geocode/json?latlng='+req.body.latitude+'%2C'+req.body.longitude+'&language=th',
     function(err, res, body){
      return JSON.parse(body);

    });
    var Client = require('node-rest-client').Client;

    var client = new Client();
    var gps = client.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+req.body.latitude+'%2C'+req.body.longitude+'&language=th',function(data, res){

      return res.json(data);
    });



  console.log(gps);
  return res.json({"status":"success"});

}
