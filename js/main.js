var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
/*	$locationProvider.html5Mode({
		enabled: false,
		requireBase: true
	  });*/
	$routeProvider 
	.when('/',{
		templateUrl:'pages/main.html',
		controller:'mainCtrl'
	})
	.when('/cont',{	
		templateUrl:'pages/contact.html',
		controller:'contactCtrl'
	})
}]);

myApp.controller('mainCtrl',['$scope',function($scope){
	$scope.name = "Main";
}]);

myApp.controller('contactCtrl',['$scope',function($scope){
	$scope.name = "Conatct";
}]);





	