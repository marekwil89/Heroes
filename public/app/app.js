var app = angular.module("app", ['ngRoute'])


app.config(function($routeProvider){

	$routeProvider.when('/register', {
		templateUrl: 'app/components/auth/register.html',
		controller: 'registerCtrl'
	});

	$routeProvider.when('/login', {
		templateUrl: 'app/components/auth/login.html',
		controller: 'loginCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});
})


app.controller('registerCtrl', function($scope, $http){
	$scope.register = function(user){
		$http.post('/auth/register', user).success(function(data){
			if(data.state === 'success'){
				console.log(data)
			}
			if(data.state === 'error'){
				console.log(data)
			}
			
		});
	}
})

app.controller('loginCtrl', function($scope){
	$scope.user = 'about'
})