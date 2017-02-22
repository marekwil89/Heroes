angular.module("registerUserModule", []).controller('registerUserCtrl', function($scope, $http, register, global, $rootScope, $location){
	$scope.registerUser = function(user){
		register.user(user).then(function(response){
			$rootScope.isAlreadyLoged()
			if(response.data.state === 'success'){
				$location.path('/workers-list')
			}
			else{
				$scope.response = response.data
			}		
		})
	}
})