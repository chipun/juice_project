var juiceApp = angular.module("juiceApp", ['ngRoute', 'ngMessages']);

juiceApp.controller("recipesController", function($http) {
    this.recipes = ['Adios Coffee', 'Apple Crisp', 'Appleberry Lush', 'Asparagus Delight ', 'Beets and Treats'];
});

juiceApp.controller("healthController", function($http) {
	
    var controller = this;

	$http({method:"GET", url:"/juice_project/juiceDataJSON.json"}).success(function(data){
		var list = data.healthData.healths;
		controller.healthdata = list;
	});

});

juiceApp.controller("benefitsController", function($http) {
	var controller = this;

	$http({method:"GET", url:"/juice_project/juiceDataJSON.json"}).success(function(data){
		var list = data.vegData.vegetables;
		controller.benefits = list;
	});

});


juiceApp.controller("ingredientsController", function($http) {

	var controller = this;

	$http({method:"GET", url:"/juice_project/juiceDataJSON.json"}).success(function(data){
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
