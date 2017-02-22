angular.module("loginUserModule", []).controller('loginUserCtrl', function($scope, $location, login, global, $rootScope){
	$scope.loginUser = function(user){
		login.user(user).then(function(response){
			$rootScope.isAlreadyLoged()
			if(response.data.state === 'success'){
				$location.path('/workers-list')
			}
			else{
				$scope.response = response.data
				console.log(response)
			}			
		})
	}

	$scope.inputError = function(name){
		console.log(name)
		// for(var i = 0; i < response.data.length; i++){
		// 	// if(response.data[i].param == "")
		// }
		
		// return 'input-error'
	}

})