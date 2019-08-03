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
	.when('/cont/:num',{	
		templateUrl:'pages/contact.html',
		controller:'contactCtrl'
	})
}]);

myApp.service('nameService',function(){
	var self  =	 this;
	this.name =	 'Vidya Sagar';
	
	this.nameLength = function(){
		return self.name.length;
	}
});

myApp.controller('mainCtrl',['$scope','$log','nameService',function($scope,$log,nameService){
	/*$scope.name = "Main";
	$log.main = "property from main";
	$log.log($log);*/
	$scope.name = nameService.name;
	$scope.$watch('name',function(){
		nameService.name = $scope.name;
	});
	
	$log.log (nameService.name);
	$log.log (nameService.nameLength());
}]);

myApp.controller('contactCtrl',['$scope','$log','$routeParams','nameService',function($scope,$log,$routeParams,nameService){
	$scope.num = $routeParams.num || 1;
	$log.contact = "property from contact";
	$log.log($log);
	$log.log(nameService.name);
	$log.log(nameService.nameLength());
	
	$scope.name = nameService.name;
	$scope.$watch('name',function(){
		nameService.name = $scope.name;
	});
}]);





	