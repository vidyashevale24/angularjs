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
	
	$scope.person = 
			{
			name:"Vidya Sagar",
			gender:"Female",
			address:"Goa , Mhapusa, 503708"
		},
		
	$scope.people = 
		[
			{
			name:"Vidya Sagar",
			gender:"Female",
			address:"Goa , Mhapusa, 503708"
		},
		{
			name:"Sagar",
			gender:"Male",
			address:"Goa , Mhapusa, 503708"
		},
		{
			name:"Pradeep ",
			gender:"Male",
			address:"Pune , katraj"
		},
	];
		
	
	$scope.formattedAddress = function(person){
		return 	person.address +', '+ person.gender;
	}
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

myApp.directive("searchResult",function(){
	return{
		restrict: 'AECM',
		templateUrl:'directives/template.html',
		//replace:false
		/*scope:{
			},*/
		/*scope:{
			personName:'@',
			personAddress:'@'
		}*/
		/*scope:{
			personObject:"=",
		}*/
		scope: {
			personObject:"=",
			formattedAddressFunction:"&"
		},
		
		/*compile: function (elem ,attrs){
			console.log('compiling...');
			//elem.removeAttr('class');
			//console.log(elem.html());
			console.log(elem);
			return {
				pre: function(scope , elements , attrs){
					console.log("Pre Linking");
					console.log(elements);
				},
				post: function(scope , elements, attrs){
					console.log("Post Linking");
					console.log(scope);
					if(scope.personObject.name == 'Sagar'){
						elements.removeAttr('class');
					} 
					console.log(elements);
				}
			}
		},
		*/
		/*link: function (scope ,elements ,attrs){
			console.log("Linking");
			console.log(scope.personObject.name);
			if(scope.personObject.name == 'Sagar'){
				elements.removeAttr('class');
			} 
			console.log(elements);
		}*/
		transclude:true
		
	}
});





	