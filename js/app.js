angular.module('prank', ['prankServices','ngCookies','prankFilters','mongolabResourceHttp']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/home.html', controller: HomeCtrl}).
            otherwise({redirectTo: '/'});
    }])
	.constant('MONGOLAB_CONFIG',{API_KEY:'FmIllpfosmgRaRMQtSEVwizeCBTLl2w1', DB_NAME:'prankings'});;