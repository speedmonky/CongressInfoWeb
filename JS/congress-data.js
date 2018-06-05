createTable()

function createTable() {

    var congressData = data.results["0"].members;
    var myBodyInHTML = document.getElementById("tab");
    myBodyInHTML.innerHTML = "";

    /* for (var i=0; i<senateData.length; i++) {
        var myRow = document.createElement("tr");
        
        
        myRow.insertCell().innerHTML = senateData[i].first_name;
        myRow.insertCell().innerHTML = senateData[i].last_name;
        myRow.insertCell().innerHTML = senateData[i].party;
        myRow.insertCell().innerHTML = senateData[i].state;
        myRow.insertCell().innerHTML = senateData[i].votes_with_party_pct;
        
        
        myBodyInHTML.append(myRow);
    } */

    congressData.forEach(function (member) {

        //member == members[i]
        if (showMember(member)) {
            var row = document.createElement("tr");
            row.insertCell().innerHTML = member.first_name;
            row.insertCell().innerHTML = member.last_name;
            row.insertCell().innerHTML = member.party;
            row.insertCell().innerHTML = member.state;
            row.insertCell().innerHTML = member.votes_with_party_pct;
            myBodyInHTML.append(row);
        }


    });
}

var inputRep = document.getElementById("rep");
var inputDem = document.getElementById("dem");

var statesSelector = document.getElementById("selector");

inputRep.addEventListener("click", createTable);
inputDem.addEventListener("click", createTable);
statesSelector.addEventListener("change", createTable);



function showMember(member) {

    var checkboxesChecked = [];

    var filter1value = false;
    var filter2value = false;


    //ADVANCED WAY

    //    var checkboxesChecked2 = Array.from(document.getElementsByName("party"))
    //    .filter(function(el){
    //        return el.checked;
    //    })
    //    .map(function(el){
    //        return "djahd";
    //    });
    //    
    //    console.log(checkboxesChecked2);


    var inputRep = document.getElementById("rep");
    var inputDem = document.getElementById("dem");
    var statesSelector = document.getElementById("selector");

    if (inputDem.checked) {
        checkboxesChecked.push("D");
    }
    if (inputRep.checked) {
        checkboxesChecked.push("R");
    }

    if (!inputDem.checked && !inputRep.checked) {
        checkboxesChecked.push("R");
        checkboxesChecked.push("D");
    }

    if (checkboxesChecked.includes(member.party)) {
        filter1value = true;
    }

    if (member.state == statesSelector.value || statesSelector.value == "all") {
        filter2value = true;
    }


    return filter1value && filter2value;
}
