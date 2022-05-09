// get a reference to the textbox where the bill type is to be entered
var textBox = document.querySelector(".billTypeText")

//get a reference to the add button
var addBtn = document.querySelector(".addToBillBtn")

//create a variable that will keep track of the total bill
var totalBtn= document.querySelector(".textTotalAddBtn")

var callTotal= document.querySelector(".callTotalOne")

var smsTotal= document.querySelector(".smsTotalOne")

var total= document.querySelector(".totalOne")

var textBill= document.querySelector(".textBillAddBtn")

//add an event listener for when the add button is pressed
 addBtn.addEventListener('click', textBillTotal);
//console.log('addBtn')

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
    var billTypeEntered = textBox.value;
    var billType= billTypeEntered.toLowerCase();
    if (billType === "call"){
        callsTotal += 2.75
    }
    else if (billType === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    document.querySelector(".callTotalOne").innerHTML = callsTotal.toFixed(2);
    document.querySelector(".smsTotalOne").innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    document.querySelector(".totalOne").innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
    // adding the danger class will make the text red
    document.querySelector(".totalOne").classList.add("danger");
     }
    else if (totalCost >= 30){
    document.querySelector(".totalOne").classList.add("warning");
    }
    }
addBtn.addEventListener('click', textBillTotal)



//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
