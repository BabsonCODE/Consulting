var app = angular.module('consulting',['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })

    .when('/whatWeOffer', {
        templateUrl: 'pages/doForYou.html',
        controller: 'mainController'
    })

    .when('/whatWeHaveDone', {
        templateUrl: 'pages/whatWeHaveDone.html',
        controller: 'mainController'
    })

    .when('/whatWeDo', {
        templateUrl: 'pages/whatWeDo.html',
        controller: 'mainController'
    })

    .when('/whoWeAre', {
        templateUrl: 'pages/whoWeAre.html',
        controller: 'mainController'
    })
});

app.controller('mainController', ['$scope',function($scope) {

}]);
