angular.module('prankServices',['ngResource'])
	/*.factory('Football', function($resource) {
        return $resource('data/football1208.json')
	})
	.factory('Basketball', function($resource){
		return $resource('data/basketball1230.json')
	})*/
	.factory('FootballMongo',function($mongolabResourceHttp) {
		return $mongolabResourceHttp('Rankings');
	});