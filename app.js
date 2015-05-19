var app= angular.module('app', [])
.controller('myController', function($scope, $http){
    $scope.getPics = function(searchTerms) {
        var url = "https://api.instagram.com/v1/tags/" + searchTerms + "/media/recent";
        var request = {
          client_id:'40f58b3815c04090b0918afa12312859',
          callback: 'JSON_CALLBACK'
          //data: data.images // goes to error alert console.logs
          //Uncaught SyntaxError: recent?client_id=40f58b3815c04090b0918afa12312859:1
        };
        $http({
            method: 'JSONP',
            url: url,
            params: request,

          })
        .success(function(response){
            $scope.pics = response.data;
          })
        .error(function(){
           alert('uhoh');
          });
  };
});//end controller

//angular.forEach(result, function(response) {