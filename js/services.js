angular.module('prankServices',['ngResource'])
	.factory('FootballMongo',function($mongolabResourceHttp) {
		return $mongolabResourceHttp('Rankings');
	});