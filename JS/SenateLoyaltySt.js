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




    

    function createTable1() {


        var senateData = data.results["0"].members;

        senateData.sort(function (a, b) {
            return (a.total_votes > b.total_votes) ? 1 : ((b.total_votes > a.total_votes) ? -1 : 0);
        });


        var myTable = document.getElementById("tab");
        myTable.innerHTML = "";


        for (var i = 0; i < senateData.length * 0.1; i++) {

            var row = document.createElement("tr");
            row.insertCell().innerHTML = senateData[i].first_name;
            row.insertCell().innerHTML = senateData[i].last_name;
            row.insertCell().innerHTML = senateData[i].total_votes;
            row.insertCell().innerHTML = senateData[i].votes_with_party_pct;
            myTable.append(row);
        }
    }






   

    function createTable2() {


        var senateData = data.results["0"].members;

        senateData.sort(function (a, b) {
            return (a.total_votes < b.total_votes) ? 1 : ((b.total_votes < a.total_votes) ? -1 : 0);
        });


        var myTable = document.getElementById("tab2");
        myTable.innerHTML = "";


        for (var i = 0; i < senateData.length * 0.1; i++) {

            var row = document.createElement("tr");
            row.insertCell().innerHTML = senateData[i].first_name;
            row.insertCell().innerHTML = senateData[i].last_name;
            row.insertCell().innerHTML = senateData[i].total_votes;
            row.insertCell().innerHTML = senateData[i].votes_with_party_pct;
            myTable.append(row);
        }
    }

});
