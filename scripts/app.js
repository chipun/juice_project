var juiceApp = angular.module("juiceApp", ['ngRoute', 'ngMessages']);

var globalurlJSON = "/juiceDataJSON.json";
var list;

juiceApp.controller("recipesController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getData().then(function(data) {
        controller.recipes = data.recipesData.recipes;
    });

});

juiceApp.controller("healthController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getData().then(function(data) {
        controller.healthdata = data.healthData.healths;
    });
});

juiceApp.controller("benefitsController", function($http, $scope, $routeParams, apiFactory) {
    var controller = this;

    if ($routeParams.name) {
        $scope.detailname = $routeParams.name
    } else {

        apiFactory.getDataBy('benefits').then(function(data) {
            controller.benefits = data;
        });
    }

});


juiceApp.controller("ingredientsController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getData().then(function(data) {
        controller.ingredients = data.fruitData.fruits;
    });

});

juiceApp.controller("contactController", ['$http', '$scope', '$window', function($http, $scope, $window) {

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
            messages: ''
        };
    };

}]);


juiceApp.factory('apiFactory', function($http, $location, $q) {

    var _baseAbsUrl = $location.absUrl();
    var _baseURL = "/juice_project/juiceDataJSON.json";


    var services = {}

    services.getData = function() {

        var deferred = $q.defer();

        $http({ method: "GET", url: _baseURL, headers: { 'Content-Type': 'application/json' } }).success(function(data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    }

    services.getDataBy = function(category) {

        var deferred = $q.defer();

        $http({ method: "GET", url: _baseURL, headers: { 'Content-Type': 'application/json' } }).success(function(data) {

            switch (category) {
                case 'ingredients':
                    deferred.resolve(data.fruitData.fruits);
                    break;
                case 'benefits':
                    deferred.resolve(data.vegData.vegetables);
                    break;
                case 'health':
                    deferred.resolve(data.healthData.healths);
                    break;
                case 'recipes':
                    deferred.resolve(data.recipesData.recipes);
                    break;
            }

        });

        return deferred.promise;
    }

    return services;

});
