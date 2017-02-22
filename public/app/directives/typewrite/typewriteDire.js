angular.module("typewriteDire", [])

.directive('typeWrite', function($interval) {
  return {
    restrict: 'A',
    scope: {
      sentences: '=',
      typeSpeed: '=',
      delay: '='
    },
    link: function($scope, element){

      var sentences = $scope.sentences;
      var typeSpeed = $scope.typeSpeed;
      var delay = $scope.delay;

      i = 0
      j = 0

      var typing = $interval(function(){
        i++
        if(i > sentences[j].length + delay){
          j++
          if(j >= sentences.length){
            return $interval.cancel(typing);
          }
          i = 0            
        }
        $scope.sentence = sentences[j].slice(0, i)
      }, typeSpeed)
      
      element.on('$destroy', function() {
         $interval.cancel(typing);
      })
    },
    template: '{{sentence}}'
  };
});