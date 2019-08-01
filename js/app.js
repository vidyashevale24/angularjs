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
myApp.controller('mainCtrl', ['$scope' ,'$log', '$filter' ,'$resource' ,'$timeout' ,function( $scope ,$log, $filter ,$resource ,$timeout) {
    $scope.characters = 10;
	
    $scope.name = 'Vidya';
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
      
    });
	
	//Understanding apply function
	/*setTimeout(function(){
		$scope.$apply(function(){
			$scope.handle="newTwitterHandlle";
			console.log("Scope Changed")
		});
	},3000);*/
}]);

//Compressed code of above 
//myApp.controller("mainCtrl",["$scope","$log","$filter","$resource",function(a,c,d,b){a.name="Vidya";a.occupation="Software Developer";c.info(a.name)}]);


//accessing array values
/*
var searchPeople = function ($scope,firstName , lastName , height, age , occupation ){
    return 'Vidya Sagar';
}

console.log(angular.injector().annotate(searchPeople));*/
