var controllerApp = angular.module("juiceApp");

controllerApp.controller("recipesController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getRecipes().then(function(data) {
        controller.recipes = data;
    });

});


controllerApp.controller("recipesDetailController", function($http, $scope, $routeParams, apiFactory) {

    if ($routeParams.name) {
        $scope.detailname = $routeParams.name
    }
});
