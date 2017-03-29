app.controller('RegisterController',['$scope', 'Mai','$http',function($scope,Min , $http){
    var _this = this;

    // Main.getContects()
     //sconsole.log(Main.contacts);



   $scope.send = function(User){

     $http.post('http://localhost:3000/signup',User)
     .success(function(res){
       console.log(res);
     })
     .error(function(err){
       console.error(err);
     });
   }


}]);

app.factory('test',function ($http) {
   var service = {};
   service.list = [];
   service.addmember = function(data){
      var api = $http.post('http://localhost:3000/signup', data);
      api.success(function(res){
          return res;
      });
      api.error(function(err){
        return err;
      });
   }
   service.status = function(){
     $http.get('http://localhost:3000/status')
     .success(function(res){
       service.list.push(res);
     })
     .error(function(err){
       return err;
     });
   }
return service;

});
