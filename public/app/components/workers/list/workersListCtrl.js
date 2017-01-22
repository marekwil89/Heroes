angular.module("workersListModule", []).controller('workersListCtrl', function($scope, $http, workers){
	workers.list().then(function(response){
		$scope.workersList = response.data
	})
})