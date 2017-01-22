angular.module("loginUserModule", []).controller('loginUserCtrl', function($scope, $location, login, global, $rootScope){
	$scope.loginUser = function(user){
		login.user(user).then(function(response){
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