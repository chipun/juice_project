var controllerApp = angular.module("juiceApp");

controllerApp.controller("healthController", function($http, $scope, $routeParams, apiFactory) {

    var controller = this;

    apiFactory.getHealths().then(function(data) {
        controller.healthdata = data;
    });
});

controllerApp.controller("healthDetailController", function($http, $scope, $routeParams, apiFactory) {

    if ($routeParams.name) {
        $scope.detailname = $routeParams.name
    }
});
