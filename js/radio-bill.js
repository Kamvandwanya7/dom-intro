// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill




var billTypeRadio = document.querySelector(".billItemTypeRadio")

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn")

//create a variable that will keep track of the total bill
var totalBtn= document.querySelector(".textTotalAddBtn")

var callTotal= document.querySelector(".callTotalTwo")

var smsTotal= document.querySelector(".smsTotalTwo")

var total= document.querySelector(".totalTwo")


//add an event listener for when the add button is pressed
 radioBillAddBtn.addEventListener('click', radioBillTotal);



var callsTotal = 0;
var smsTotal = 0;
function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
       }
    if (billItemType === "call"){
        callsTotal += 2.75;
    }
    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    document.querySelector(".callTotalTwo").innerHTML = callsTotal.toFixed(2);
    document.querySelector(".smsTotalTwo").innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    document.querySelector(".totalTwo").innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
    document.querySelector(".totalTwo").classList.add("danger");
     }
    else if (totalCost >= 30){
    document.querySelector(".totalTwo").classList.add("warning");
    }
    }

radioBillAddBtn.addEventListener('click', radioBillTotal)
