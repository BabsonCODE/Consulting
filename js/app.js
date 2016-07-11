var app = angular.module('consulting',['ngRoute','ngResource']);

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

app.controller('mainController', ['$scope','$log','$location','$resource',function($scope,$log,$location,$resource) {

    $scope.success = false;

    $scope.color = {
        whoWeAre: '',
        whatWeDo : '',
        whatWeHaveDone: '',
        whatWeOffer: ''
    };

    function navbar (location) {
        if (location == '/whoWeAre') {
            $scope.color.whoWeAre = "#960400";
            $scope.color.whatWeDo = "rgba(255,255,255,.5)";
            $scope.color.whatWeHaveDone = "rgba(255,255,255,.5)";
            $scope.color.whatWeOffer = "rgba(255,255,255,.5)";
        } else if (location == '/whatWeDo') {
            $scope.color.whoWeAre = "rgba(255,255,255,.5)";
            $scope.color.whatWeHaveDone = "rgba(255,255,255,.5)";
            $scope.color.whatWeOffer = "rgba(255,255,255,.5)";
            $scope.color.whatWeDo = "#960400";
        } else if (location == '/whatWeHaveDone') {
            $scope.color.whoWeAre = "rgba(255,255,255,.5)";
            $scope.color.whatWeOffer = "rgba(255,255,255,.5)";
            $scope.color.whatWeDo = "rgba(255,255,255,.5)";
            $scope.color.whatWeHaveDone = "#960400";
        } else if (location == '/whatWeOffer') {
            $scope.color.whoWeAre = "rgba(255,255,255,.5)";
            $scope.color.whatWeHaveDone = "rgba(255,255,255,.5)";
            $scope.color.whatWeDo = "rgba(255,255,255,.5)";
            $scope.color.whatWeOffer = "#960400";
        } else {
            $scope.color.whoWeAre = "rgba(255,255,255,.5)";
            $scope.color.whatWeHaveDone = "rgba(255,255,255,.5)";
            $scope.color.whatWeDo = "rgba(255,255,255,.5)";
            $scope.color.whatWeOffer = "rgba(255,255,255,.5)";
        }
    }

    $scope.$on('$routeChangeSuccess', function (scope, next, current) {
        navbar($location.url());
    });

    if ($location.search().email === "success") {
        $scope.success = true;
    }

}]);
