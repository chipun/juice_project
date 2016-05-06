var controllerApp = angular.module("juiceApp");

controllerApp.controller("benefitsController", function($http, $scope, $routeParams, apiFactory) {
    var controller = this;

    if ($routeParams.name) {
        $scope.detailname = $routeParams.name
    } else {

        apiFactory.getBenefits().then(function(data) {
            controller.benefits = data;
        });
    }
});
