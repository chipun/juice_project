var controllerApp = angular.module("juiceApp");

controllerApp.controller("recipesController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getRecipes().then(function(data) {
        controller.recipes = data;
    });

});