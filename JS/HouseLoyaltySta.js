$(function () {

    var data;

    $.ajax({
        url: "https://api.myjson.com/bins/w5j7d",
        dataType: 'json',
        success: function (json) {
            data = json;
            createTable1();
            createTable2();
        }

    });





    

    function createTable1() {


        var congressData = data.results["0"].members;

        congressData.sort(function (a, b) {
            return (a.total_votes > b.total_votes) ? 1 : ((b.total_votes > a.total_votes) ? -1 : 0);
        });


        var myTable = document.getElementById("tab");
        myTable.innerHTML = "";


        for (var i = 0; i < congressData.length * 0.1; i++) {

            var row = document.createElement("tr");
            row.insertCell().innerHTML = congressData[i].first_name;
            row.insertCell().innerHTML = congressData[i].last_name;
            row.insertCell().innerHTML = congressData[i].total_votes;
            row.insertCell().innerHTML = congressData[i].votes_with_party_pct;
            myTable.append(row);
        }
    }






   

    function createTable2() {


        var congressData = data.results["0"].members;
        congressData.sort(function (a, b) {
            return (a.total_votes < b.total_votes) ? 1 : ((b.total_votes < a.total_votes) ? -1 : 0);

        });


        var myTable = document.getElementById("tab2");
        myTable.innerHTML = "";


        for (var i = 0; i < congressData.length * 0.1; i++) {

            var row = document.createElement("tr");
            row.insertCell().innerHTML = congressData[i].first_name;
            row.insertCell().innerHTML = congressData[i].last_name;
            row.insertCell().innerHTML = congressData[i].total_votes;
            row.insertCell().innerHTML = congressData[i].votes_with_party_pct;
            myTable.append(row);
        }
    }

});
