angular.module("routesModule", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state({
	    name: 'main-page',
	    url: '/',
	    templateUrl: 'app/components/main/main-page.html',
	    controller: 'mainPageCtrl'
 	})

	.state({
	    name: 'register-worker',
	    url: '/register-worker',
	    templateUrl: 'app/components/auth/worker/register-worker.html',
	    controller: 'registerWorkerCtrl'
 	})

	.state({
	    name: 'login-worker',
	    url: '/login-worker',
	    templateUrl: 'app/components/auth/worker/login-worker.html',
	    controller: 'loginWorkerCtrl'
 	})

	.state({
	    name: 'register-user',
	    url: '/register-user',
	    templateUrl: 'app/components/auth/user/register-user.html',
	    controller: 'registerUserCtrl'
 	})

	.state({
	    name: 'login-user',
	    url: '/login-user',
	    templateUrl: 'app/components/auth/user/login-user.html',
	    controller: 'loginUserCtrl'
 	})

	.state({
	    name: 'workers-list',
	    url: '/workers-list',
	    templateUrl: 'app/components/workers/list/workers-list.html',
	    controller: 'workersListCtrl'
 	})

	.state({
	    name: 'workers-detail',
	    url: '/workers-list/{workerId}',
	    templateUrl: 'app/components/workers/detail/workers-detail.html',
	    controller: 'workersDetailCtrl'
 	})

	.state({
	    name: 'workers-profile',
	    url: '/workers/profile/{workerId}',
	    templateUrl: 'app/components/workers/profile/workers-profile.html',
	    controller: 'workersProfileCtrl'
 	})

 	.state({
	    name: 'workers-profile-edit',
	    url: '/workers/profile/{workerId}/edit',
	    templateUrl: 'app/components/workers/profile/workers-profile-edit.html',
	    controller: 'workersProfileCtrl'
 	})

})