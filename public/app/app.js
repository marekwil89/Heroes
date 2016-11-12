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


app.controller('registerCtrl', function($scope){
	$scope.user = 'main'
})

app.controller('loginCtrl', function($scope){
	$scope.user = 'about'
})