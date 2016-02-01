angular.module('prank', ['ngCookies', 'mongolabResourceHttp', 'prankServices', 'prankFilters']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'partials/crankings.html', controller: HomeCtrl})
            .when('/xkcd', {templateUrl: 'partials/now.html'})
            .otherwise({redirectTo: '/'});
    }])
    .constant('MONGOLAB_CONFIG', {API_KEY: 'FmIllpfosmgRaRMQtSEVwizeCBTLl2w1', DB_NAME: 'prankings'});

