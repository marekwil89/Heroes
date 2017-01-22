angular.module("registerWorkerModule", []).controller('registerWorkerCtrl', function($scope, $http, register, global, $rootScope){

	$scope.worker = {
		name: 'Batman',
		descr: 'This is my description <-- here',
		email: 'batman@gmail.com',
		password: 'manta123',
		repeatPass: 'manta123' 
	}

	$scope.registerWorker = function(worker){
		register.worker(worker).then(function(response){
			$rootScope.isAlreadyLoged()
			console.log(response)
			if(response.data.state === 'success'){
				$location.path('/workers-list')
			}
			else{
				$scope.response = response.data
			}			
		})
	}
})