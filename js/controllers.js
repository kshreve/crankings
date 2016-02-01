function HomeCtrl($scope, Mongo) {
    var teams = {};

    //name, Frank, FBRecord, Brank,BBRecord, Crank
    function addTeams(teamList, sport) {
        for(var i = 0; i < teamList.length; i++) {
            var team = teams[teamList[i].TEAM] || {"Name": teamList[i].TEAM};
            switch(sport) {
                case "FB":
                    team.Frank = teamList[i].RK;
                    team.FBRecord = teamList[i].RECORD;
                    team.Crank = team.Frank + 50;
                    break;
                case "BB":
                    team.Brank = teamList[i].RK;
                    team.BBRecord = teamList[i].RECORD;
                    team.Crank = team.Brank + 50;
                    break;
                default:
                    break;
            }
            if(team.Brank && team.Frank) {
                team.Crank = team.Brank + team.Frank;
            }

            teams[team.Name] = team;
        }
    }

    Mongo.getById('Football',
        function(Teams) {
            var dateTeams = Teams.DEC0813;
            addTeams(dateTeams, "FB");

        }
    );

    Mongo.getById('Basketball',
        function(Teams) {
            var dateTeams = Teams.DEC3013;
            addTeams(dateTeams, "BB");
        }
    );

    $scope.teams = teams;
}
