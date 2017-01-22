angular.module('footerDire', [])

.directive('footer', function(){
  return {
    restrict : 'E',
    templateUrl: 'app/shared/footer/footer.html'
  };
});
