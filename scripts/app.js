var juiceApp = angular.module("juiceApp", ['ngRoute', 'ngMessages']);

juiceApp.controller("recipesController", function($http) {
    this.recipes = ['Adios Coffee', 'Apple Crisp', 'Appleberry Lush', 'Asparagus Delight ', 'Beets and Treats'];
});

juiceApp.controller("healthController", function($http) {
    this.healthdata = ['Alzheimer"s Prevention', 'Antioxidants', 'Cancer Prevention', 'Arthritis', 'Breast Cancer'];
});

juiceApp.controller("benefitsController", function($http) {
    this.benefits = ['carrot', 'orange', 'grape', 'kiwi', 'ginger'];
});


juiceApp.controller("ingredientsController", function($http) {
    this.ingredients = ['carrot', 'orange', 'grape', 'kiwi', 'ginger'];
});

juiceApp.controller("ContactController", ['$scope', '$window', function($scope, $window) {

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
            email: ''
        };
    };

}]);
