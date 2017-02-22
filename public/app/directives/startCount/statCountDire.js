angular.module("statCountDire", [])

.directive('statCount', function ($window, $interval) {
  return {
    restrict: 'A',
    scope: {
      finish: '@',
      start: '@',
      speed: '@',
      plus: '@'
    },
    link: function($scope) {
      $scope.stat = 0
      var halfSectionHeight = angular.element('.stats-section')[0].offsetHeight/2
      var startCount = true
      var finish = parseInt($scope.finish)
      var start = parseInt($scope.start)
      var speed = parseInt($scope.speed)
      var speed = parseInt($scope.speed)
      var plus = $scope.plus

      angular.element($window).bind("scroll", function() {
        

        if (this.pageYOffset >= halfSectionHeight) {
  
            if(startCount == true){
            startCount = false


            var count = $interval(function(){
            start+=2
            if(start >= finish){
              return $interval.cancel(count);
            }
            $scope.stat = start + plus

            }, speed);
          }  
        }
      });
    },
    template: '{{stat}}'
  }

});
