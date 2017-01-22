angular.module("mainPageModule", []).controller('mainPageCtrl', function($scope, workers, hero){
  $scope.quotes = hero.quotes

	workers.latest().then(function(response){
		$scope.workersLatest = response.data
	})

  workers.best().then(function(response){
    $scope.workersBest = response.data
  })
})