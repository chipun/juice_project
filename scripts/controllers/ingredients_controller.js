var controllerApp = angular.module("juiceApp");

controllerApp.controller("ingredientsController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getIngredients().then(function(data) {
        controller.ingredients = data;
    });

});

controllerApp.controller("ingredientsDetailController", function($http, $scope, $routeParams, apiFactory) {

    if ($routeParams.name) {
        $scope.detailname = $routeParams.name
    }
});

