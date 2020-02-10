document.addEventListener('DOMContentLoaded', function() {
    var currentD = moment().format("dddd, MMM Do");
   document.getElementById("currentDay").innerHTML = currentD;

   createTimeBlocks();
   renderTimeBlocks();
});


rowDiv = document.getElementById("row");


function createTimeBlocks() {

    for (var i = 9; i <= 17; i++) {

        var hourB = document.createElement("div");
        hourB.setAttribute("class", "hour");
        hourB.setAttribute("id", i);
        hourB.textContent = i + "AM";
        rowDiv.appendChild(hourB);
    
        var textB = document.createElement("textarea");
        textB.setAttribute("id","timeBlock-"+i);
        rowDiv.appendChild(textB);

        var saveB = document.createElement("button");
        saveB.setAttribute("class","saveBtn");
        saveB.setAttribute("type","button");
        saveB.setAttribute("onclick","onClick(" + i + ")");
        rowDiv.appendChild(saveB);
     
        }

        var hourBP = document.getElementById("12");
        hourBP.innerText = "12 PM";

        var hourBP1 = document.getElementById("13");
        hourBP1.innerText = "1 PM";

        var hourBP2 = document.getElementById("14");
        hourBP2.innerText = "2 PM";

        var hourBP3 = document.getElementById("15");
        hourBP3.innerText = "3 PM";

        var hourBP4 = document.getElementById("16");
        hourBP4.innerText = "4 PM";

        var hourBP5 = document.getElementById("17");
        hourBP5.innerText = "5 PM";
    }

    


function renderTimeBlocks() {
    var date = new Date();
    var currHour = date.getHours();
    

    for(var i = 9; i <= 17; i++) {

        var inPut = localStorage.getItem(i);
        if (inPut) {
        x =  document.getElementById("timeBlock-" + i);
        x.textContent = inPut;
        }

        document.getElementById("timeBlock-" + i ).setAttribute("class", " ");

        if(i < currHour) {
            
            var lessCurrEl = document.getElementById("timeBlock-" + i );
            lessCurrEl.setAttribute("class", "past");

        }
        if (i === currHour) {

            var currEl = document.getElementById("timeBlock-" + i );
            currEl.setAttribute("class","present");
        }
        if (i > currHour) {
            
            var greatCurrEl = document.getElementById("timeBlock-" + i );
            greatCurrEl.setAttribute("class", "future");
        }
    }

}

function onClick(currHour) {
      var inPut = document.getElementById("timeBlock-" + currHour).value;
        localStorage.setItem(currHour, inPut);
}