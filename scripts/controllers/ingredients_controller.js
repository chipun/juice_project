var controllerApp = angular.module("juiceApp");

controllerApp.controller("ingredientsController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getIngredients().then(function(data) {
        controller.ingredients = data;
    });

});
