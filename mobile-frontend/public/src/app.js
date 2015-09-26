
function onGoogleReady() {
  angular.bootstrap(document.getElementById("map"), ['OlxModule']);
}

angular.module('OlxModule', ['ngRoute', 'ngResource', 'ui.map'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/ad', {
                controller: 'locationController',
                templateUrl:'views/adLocation.html'
            })
            .otherwise({
                redirectTo: '/ad'
            });
        $locationProvider.html5Mode(true);
    });