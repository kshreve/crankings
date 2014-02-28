angular.module('prank', ['prankServices','ngCookies','prankFilters','mongolabResourceHttp']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/crankings', {templateUrl: 'partials/crankings.html', controller: HomeCtrl})
            .when('/xkcd', {templateUrl: 'partials/now.html', controller: XkcdCtrl})
            .otherwise({redirectTo: '/'});
    }])
	.constant('MONGOLAB_CONFIG',{API_KEY:'FmIllpfosmgRaRMQtSEVwizeCBTLl2w1', DB_NAME:'prankings'});;