app.controller('LoacationCtrl',['$scope', '$http', function($scope, $http){
  $scope.test ='test';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
      console.log('error locations');
    }
    function showPosition(position) {
          $scope.la = position.coords.latitude;
          $scope.lon = position.coords.longitude;
          console.log(position);
          var location = {
            latitude: position.coords.latitude ,
            longitude: position.coords.longitude
          };
          $http.post('http://localhost:8080/locations',location)
          .success(function(data){
            console.log(data);
          })
          .error(function(err){
            alert(err);
          });
   }

}]);
