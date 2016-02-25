var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
        })
        .when('/mike', {
            templateUrl: '/views/templates/mike.html',
        })
        .when('/harvey', {
            templateUrl: '/views/templates/harvey.html'
        })
        .when('/donna', {
            templateUrl: '/views/templates/donna.html'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
