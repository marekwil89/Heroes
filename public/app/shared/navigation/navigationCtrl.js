angular.module('navigationModule', [])


.controller('navigationCtrl', function($scope, $http, $location, $rootScope){

	$scope.isActive = function(path){
		return $location.path() === path;
	};

})

