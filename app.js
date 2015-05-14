var app= angular.module('app', [])
.controller('myController', function($scope, $http){
    $scope.getPics = function(data) {
        var url = "https://api.instagram.com/v1/tags/" + data + "/media/recent";
        var request = {
          client_id:'40f58b3815c04090b0918afa12312859'
          //data: data.images // goes to error alert console.logs
          //Uncaught SyntaxError: recent?client_id=40f58b3815c04090b0918afa12312859:1
        };
        $http({
            method: 'JSONP',
            url: url,
            params: request,
            callback: 'JSON_CALLBACK'
          })
        .success(function(response){
           $scope.data = response;

           console.log($scope.data);
           $scope.images = response.data.images;
          })
        .error(function(){
           alert('uhoh');
          });
  };
});//end controller

