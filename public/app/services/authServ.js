angular.module("authServ", [])

.factory('register', function($http){
	return {
		worker: function(worker){
			return $http.post('/worker/registerWorker', worker)
		},
		user: function(user){
			return $http.post('/user/registerUser', user)
		},
	};
})


.factory('login', function($http){
	return {
		worker: function(worker){
			return $http.post('/worker/loginWorker', worker)
		},
		user: function(user){
			return $http.post('/user/loginUser', user)
		},
	};
})