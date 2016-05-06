var juiceApp = angular.module("juiceApp", ['ngRoute', 'ngMessages']);

juiceApp.factory('apiFactory', function($http, $location, $q) {

    var _baseAbsUrl = $location.absUrl();
    var _baseURL = "/juiceDataJSON.json";

    var _httpOptions = {
        method: "GET",
        url: _baseURL,
        headers: { 'Content-Type': 'application/json' }
    }

    var services = {}

    services.getData = function() {

        var deferred = $q.defer();

        $http(_httpOptions).success(function(data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    }

    services.getDataBy = function(category) {

        var deferred = $q.defer();

        $http(_httpOptions).success(function(data) {

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


    services.getIngredients = function() {

        var deferred = $q.defer();

        $http(_httpOptions).success(function(data) {

            deferred.resolve(data.fruitData.fruits);

        });

        return deferred.promise;
    }


    services.getBenefits = function() {

        var deferred = $q.defer();

        $http(_httpOptions).success(function(data) {

            deferred.resolve(data.vegData.vegetables);

        });

        return deferred.promise;

        return deferred.promise;
    }

    services.getRecipes = function() {

        var deferred = $q.defer();

        $http(_httpOptions).success(function(data) {

            deferred.resolve(data.recipesData.recipes);

        });

        return deferred.promise;
    }

    services.getHealths = function() {

        var deferred = $q.defer();

        $http(_httpOptions).success(function(data) {

            deferred.resolve(data.healthData.healths);

        });

        return deferred.promise;

        return deferred.promise;
    }

    return services;

});
