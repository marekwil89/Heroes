angular.module('navigationDire', [])

.directive('navigation', function(){
	return {
		restrict : 'E',
		templateUrl: 'app/directives/navigation/navigation.html'
	};
});
