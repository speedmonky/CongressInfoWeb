$(function () {

    var data;

    $.ajax({
        url: "https://api.myjson.com/bins/1awj0t",
        dataType: 'json',
        success: function (json) {
            data = json;
            createTable1();
            createTable2();
            
            
            
        }

    });




    var senateData = data.results["0"].members;
    var allRepVotes = [];
    var allDemVotes = 0;
    var allIndVotes = 0;

    senateData.forEach(function (num) {
        if (num.party == "R")
            allRepVotes += num.votes_with_party_pct;
        // console.log(allRepVotes);
    });



    senateData.forEach(function (num) {
        if (num.party == "D")
            allDemVotes += num.votes_with_party_pct;
    });

    senateData.forEach(function (num) {
        if (num.party == "I")
            allIndVotes += num.votes_with_party_pct;
    });

    var statistics = {
        numberOfDemocrats: 57,
        numberOfRepublicans: 46,
        numberOfIndependents: 2,
        demVotedWparty: 97,
        repVotedWparty: 70,
        indVotedWparty: 95,
    };


    // var test = // [1,2,4,7,4,89,23,54,56,23,89,34,54,78,33,46,54,32,34,56];
    // 
    // console.log(test);
    // console.log(test.sort());
    // console.log(test.reverse());

    


    

    function createTable1() {


        var senateData = data.results["0"].members;

        senateData.sort(function (a, b) {
            return (a.missed_votes < b.missed_votes) ? 1 : ((b.missed_votes < a.missed_votes) ? -1 : 0);
        });


        var myTable = document.getElementById("tab");
        myTable.innerHTML = "";


        for (var i = 0; i < senateData.length * 0.1; i++) {

            var row = document.createElement("tr");
            row.insertCell().innerHTML = senateData[i].first_name;
            row.insertCell().innerHTML = senateData[i].last_name;
            row.insertCell().innerHTML = senateData[i].missed_votes;
            row.insertCell().innerHTML = senateData[i].missed_votes_pct;
            myTable.append(row);
        }
    }






 

    function createTable2() {


        var senateData = data.results["0"].members;
        senateData.sort(function (a, b) {

            return (a.missed_votes > b.missed_votes) ? 1 : ((b.missed_votes > a.missed_votes) ? -1 : 0);
        });


        var myTable = document.getElementById("tab2");
        myTable.innerHTML = "";


        for (var i = 0; i < senateData.length * 0.1; i++) {

            var row = document.createElement("tr");
            row.insertCell().innerHTML = senateData[i].first_name;
            row.insertCell().innerHTML = senateData[i].last_name;
            row.insertCell().innerHTML = senateData[i].missed_votes;
            row.insertCell().innerHTML = senateData[i].missed_votes_pct;
            myTable.append(row);
        }
    }

});
