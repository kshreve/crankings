angular.module('prankServices', ['ngResource'])
    .factory('Mongo', function($mongolabResourceHttp) {
        return $mongolabResourceHttp('Rankings');
    });
