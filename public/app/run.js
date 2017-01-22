angular.module("runModule", [])

.run(function($http, $rootScope, global) {	
	$rootScope.isAlreadyLoged = function(){
		global.isAlreadyLoged().then(function(response){
			$rootScope.current_user = response.data
		})
	}

	$rootScope.isAlreadyLoged()

	$rootScope.logOut = function(){
   	global.logOut().then(function(){
    	$rootScope.isAlreadyLoged()  	  		
   	})
	}
})

