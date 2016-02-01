angular.module('prankServices', ['ngResource'])
    .factory('FootballMongo', function($mongolabResourceHttp) {
        return $mongolabResourceHttp('Rankings');
    })
    .factory('BasketballMongo', function($mongolabResourceHttp) {
        return $mongolabResourceHttp('Rankings');
    });
