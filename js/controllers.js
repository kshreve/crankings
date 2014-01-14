function HomeCtrl($scope, FootballMongo, $cookies, $location, $http) {
	var teams = {};
	
	FootballMongo.all(function(rankings) {
		$scope.rankings = rankings;
	});
	
	FootballMongo.getById('Football', 
		function(out) { 
			alert(out);
		}
	);
	
	$scope.teams = teams;	
};