angular.module('footerDire', [])

.directive('foot', function(){
  return {
    restrict : 'E',
    replace: true,
    templateUrl: 'app/directives/footer/footer.html'
  };
});
