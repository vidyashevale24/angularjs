(function(){


	//Understanding array and functions
	/*var arr =[1, 'Vidya', 3 ,function(){
		alert("hi");
	}];

	arr[3]();*/

	//Understanding dependancy injections and services

	/*var myApp = angular.module('myApp', ['ngMessages','ngResource']);
	myApp.controller('mainCtrl', function ($scope ,$log ,$filter ,$resource) {

		$scope.name = 'Vidya';
		$scope.occupation = 'Software Developer';
		$log.info($scope.name);

		console.log($scope);
		console.log($log);
		$log.log("Hello Vidya");
		$log.info("This is some information");
		$log.warn("This is a warning message");
		$log.debug("This is some debug code");
		$log.error("It's an error message");

		console.log($resource);
		$scope.name = 'Vidya';
		$scope.formatedName = $filter('uppercase')($scope.name);
		$log.info($scope.name);
		$log.info($scope.formatedName);
	 });*/

	var myApp = angular.module('myApp', ['ngMessages','ngResource']);
	myApp.controller('mainCtrl', ['$scope' ,'$log', '$filter' ,'$resource' ,'$timeout' ,'$http' ,function( $scope ,$log, $filter ,$resource ,$timeout ,$http) {
		//Understanding get method

		$http({
			method: 'GET',
			url: 'http://localhost:81/VS/angularJS/api.php'
		}).then(function (result){
			console.log(result.data);
			$scope.rules = result.data;
		},function (error){

	   	});
		
		//Understanding post method
		$scope.newRule = '';
		$scope.AddRule = function(){
			$http({
			url: 'http://localhost:81/VS/angularJS/api.php',
			method: "POST",
			data: { 'newRule' : $scope.newRule },
			 headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
			})
			.then(function(response) {
					//Success
					$scope.rules = response.data;
					$scope.newRule = '';
			}, 
			function(response) { // optional
					// Failed
					console.log("in else"+response);
			});
		}
		

		
		//Understanding array object
	    /* $scope.characters = 10;
		$scope.rules = [
			{	rulename : "Must be 10 charactes" 	},
			{	rulename : "Must not be used elsewhere" 	},
			{	rulename : "Must be character" 	}
		];
		console.log($scope.rules);*/

		/*$scope.name = 'Vidya';
		$scope.occupation = 'Software Developer';

		$timeout(function(){
			$scope.name = 'Sagar';
		},3000);

		$scope.handle = '';
		$scope.lowercaseHandel=      function(){   
			return $filter('lowercase')($scope.handle);
		}

		//Understanding watch function
		$scope.$watch('handle',function(newValue, oldValue){
			console.log("CHanged");
			console.log("oldValue :  "+oldValue);
			console.log("newValue:  "+newValue);

		});*/

		//Understanding apply function
		/*setTimeout(function(){
			$scope.$apply(function(){
				$scope.handle="newTwitterHandlle";
				console.log("Scope Changed")
			});
		},3000);*/


		//Understanding function
		/*$scope.btnClicked = function(){
			alert("clicked");
		};*/


			//Compressed code of above 
		//myApp.controller("mainCtrl",["$scope","$log","$filter","$resource",function(a,c,d,b){a.name="Vidya";a.occupation="Software Developer";c.info(a.name)}]);


		//accessing array values
		/*
		var searchPeople = function ($scope,firstName , lastName , height, age , occupation ){
			return 'Vidya Sagar';
		}

		console.log(angular.injector().annotate(searchPeople));*/
	}]);
}());
