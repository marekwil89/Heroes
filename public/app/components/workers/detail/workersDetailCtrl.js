angular.module("workersDetailModule", []).controller('workersDetailCtrl', function($scope, workers, Map){
	var workerDetail = function(){
		workers.detail().then(function(response){
			$scope.worker = response.data
			$scope.search($scope.worker);
		})		
	}

    $scope.search = function(worker) {
        $scope.apiError = false;
        Map.search(worker.adress)
        .then(
            function(res) {
                Map.addMarker(res);
                // $scope.place.name = res.name;
                // $scope.place.lat = res.geometry.location.lat();
                // $scope.place.lng = res.geometry.location.lng();
            },
            function(status) {
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }	

	$scope.addOpinion = function(opinion){
		workers.addOpinion(opinion).then(function(response){
			$scope.response = response.data
			workerDetail()
		})
	}


	workerDetail()
	Map.init()

})