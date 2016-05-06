angular.module("juiceApp").controller("contactController", ['$http', '$scope', '$window', function($http, $scope, $window) {

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