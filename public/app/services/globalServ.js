angular.module("globalServ", [])

.factory('global', function($http){
  return {
    isAlreadyLoged: function(){
      return $http.get('/comnAuth/isAlreadyLoged')
    },
    logOut: function(){
      return $http.get('/comnAuth/logout')
    }
  };
})