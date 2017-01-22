angular.module("workersServ", [])

.factory('workers', function($http, $stateParams){
	return {
		list: function(){
			return $http.get('/workers-list/list')
		},
		latest: function(){
			return $http.get('/workers-latest/latest')
		},
		best: function(){
			return $http.get('/workers-best/best')
		},
		detail: function(){
			var id = $stateParams.workerId
			return $http.get('workers-detail/detail/' + id)
		},
		addOpinion: function(comment){
			var id = $stateParams.workerId
			return $http.post('workers-detail/addOpinion/' + id, comment)

		},
		editProfile: function(worker){
			var id = $stateParams.workerId
			return $http.put('workers-profile/editProfile/' + id, worker)
		}
	};
})

