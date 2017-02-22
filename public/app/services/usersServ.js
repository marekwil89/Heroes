angular.module("usersServ", [])

.factory('users', function($http){
  return {
    list: function(){
      return $http.get('/users-list/list')
    }
  };
})