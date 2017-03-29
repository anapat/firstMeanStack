app.service('Main',function($http){
  var service = this;
  service.contacts =[];
  service.getContects = function(){
    $http.get("http://localhost:3000/status").
    then(function(res){
      while (res.data[0]) {
        service.contacts.push(res.data.pop());
      }
    },function(err){

    });
  service.addContactes = function( contact ){
    service.contacts.push(contacts.pop());
  }
  };
});
