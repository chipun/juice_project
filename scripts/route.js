angular.module('juiceApp').config(function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'templates/content-index.html'
        })
        .when('/benefits/:name?', {
            templateUrl: 'templates/pages/benefits/benefits-index.html',
            controller: 'benefitsController',
            controllerAs: 'benCtrl'
        })
        .when('/health/:name?', {
            templateUrl: 'templates/pages/health/health-index.html',
            controller: 'healthController',
            controllerAs: 'healthCtrl'
        })
        .when('/ingredients/:name?', {
            templateUrl: 'templates/pages/ingredients/ingredients-index.html',
            controller: 'ingredientsController',
            controllerAs: 'ingCtrl'
        })
        .when('/recipes/:name?', {
            templateUrl: 'templates/pages/recipes/recipes-index.html',
            controller: 'recipesController',
            controllerAs: 'recipesCtrl'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller:'contactController',
            controllerAs:'contactCtrl'
            
        })

    .otherwise({ redirectTo: '/' });
})
