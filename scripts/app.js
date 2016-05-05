var juiceApp = angular.module("juiceApp", ['ngRoute', 'ngMessages']);

var globalurlJSON = "/juice_project/juiceDataJSON.json";

juiceApp.controller("recipesController", function($http,$routeParams) {

  var controller = this;

    $http({method:"GET", url:globalurlJSON, headers:{'Content-Type':'application/json'}}).success(function(data){
        var list = data.recipesData.recipes;
        controller.recipes = list;
    });

});

juiceApp.controller("healthController", function($http,$routeParams) {
	
    var controller = this;

	$http({method:"GET", url:globalurlJSON, headers:{'Content-Type':'application/json'}}).success(function(data){
		var list = data.healthData.healths;
		controller.healthdata = list;
	});

});

juiceApp.controller("benefitsController", function($http,$routeParams) {
	var controller = this;

	$http({method:"GET", url:globalurlJSON, headers:{'Content-Type':'application/json'}}).success(function(data){
		var list = data.vegData.vegetables;
		controller.benefits = list;
	});

});


juiceApp.controller("ingredientsController", function($http, $routeParams) {

	var controller = this;

	$http({method:"GET", url:globalurlJSON, headers:{'Content-Type':'application/json'}}).success(function(data){
		var list = data.fruitData.fruits;
		controller.ingredients = list;
	});

});

juiceApp.controller("contactController", ['$http','$scope', '$window', function($http, $scope, $window) {

    $scope.submitClick = function() {

        if ($scope.userForm.$valid) {
            var getUser = $scope.user;
            $scope.reset();
            $window.alert("Thank you for submitting your messages. You will receive email with 24 hours");
        } else {
            $window.alert("There are invalid fields");
        }


    };

    $scope.reset = function() {
        $scope.user = {
            fname: '',
            lname: '',
            email: '',
            messages:''
        };
    };

}]);
