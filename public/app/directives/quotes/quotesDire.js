angular.module("quotesDire", [])

.directive('quotesSection', function(){
  return {
    restrict: 'E',
    scope: true,
    replace: true,
    templateUrl: '/app/directives/quotes/quotes-section.html',

    controller: function($scope){ 

      $scope.currentTab = 0

      $scope.quotes = [
        {
          author: 'spiderman', 
          text: 'With great power comes great responsibility'
        },
        {
          author: 'batman',
          text: 'A hero can be anyone even a man doing simple'
        },
        {
          author: 'iron-man',
          text: "That's kind of catchy. It's got a nice ring to it"
        }
      ]

      $scope.selectTab = function(index) {
        $scope.currentTab = index;
      };
    }
  }
})

