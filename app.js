var app= angular.module('app', [])
.controller('myController', function($scope, $http){
		$scope.getPics = function(data) {
		var url = "https://api.instagram.com/v1/tags/nofilter/media/recent";
		var request = {
			client_id:'40f58b3815c04090b0918afa12312859',
			data: data.images

		};
	$http({
		  method: 'JSONP',
			url: url,
			params: request
		})
	.success(function(response){
     $scope.data = response;
    // var weFound = $scope.function(elem){
    // 	return elem.css('display', 'inline-block');};
     console.log($scope.data);
	  })
	.error(function(){
		 alert('uhoh');
	  });
  }
});//end controller

