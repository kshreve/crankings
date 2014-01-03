function HomeCtrl($scope, FootballMongo, $cookies, $location, $http) {
	var teams = {};
	
	/*Football.get({}, function (fbTeams) {
		Basketball.get({},function(bbTeams){
			fbTeams = fbTeams.teamlist;
			for(var i = 0; i < fbTeams.length; i++){
				var name = fbTeams[i][1];
				var frank = fbTeams[i][0];
				var prank = frank + 50;
				var team = {
					"name" : name,
					"Frank" : frank,
					"Prank" : prank
				};
				teams[fbTeams[i][1]] = team;
			}
			bbTeams = bbTeams.teamlist;
			for(var i = 0; i < bbTeams.length; i++){
				var name = bbTeams[i][1];
				var brank = bbTeams[i][0];
				var prank = brank;
				var team = {
					"name" : name,
					"Brank" : brank,
					"Prank" : prank
				};
				if(!teams[bbTeams[i][1]] ) {
					teams[bbTeams[i][1]] = team;
					teams[bbTeams[i][1]]["Prank"] = brank + 50;
				}
				else{
					teams[bbTeams[i][1]]["Brank"] = brank;
					teams[bbTeams[i][1]]["Prank"] = brank + teams[bbTeams[i][1]]["Frank"];
				}
			}		
		});
	});*/
	
	FootballMongo.all(function(rankings) {
		$scope.rankings = rankings;
	});
	
	FootballMongo.getById('Football', 
		function(out) { 
			alert(out);
		}
		, function (e){ 
			alert(e);
		}
	);
	
	$scope.teams = teams;	
};