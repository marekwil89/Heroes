angular.module("workersProfileModule", []).controller('workersProfileCtrl', function($scope, workers, Map, $location){
	var workerDetail = function(){
		workers.detail().then(function(response){
			$scope.worker = response.data		
		})		
	}

	$scope.editProfile = function(worker){
		workers.editProfile(worker).then(function(response){
      if(response.data.state === 'success'){
        $location.path('/workers-list')
      }
      else{
        $scope.response = response.data
      }   
			workerDetail()
		})
	}

	workerDetail()
})