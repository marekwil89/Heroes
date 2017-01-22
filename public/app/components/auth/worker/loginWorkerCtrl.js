angular.module("loginWorkerModule", []).controller('loginWorkerCtrl', function($scope, $location, login, global, $rootScope){

	$scope.worker = {
		name: 'Batman',
		descr: 'This is my description <-- here',
		email: 'batman@gmail.com',
		password: 'manta123',
		repeatPass: 'manta123' 
	}
	
	$scope.loginWorker = function(worker){
		login.worker(worker).then(function(response){
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
