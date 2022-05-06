//get a reference to the calculate button
var calcBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var totalBill = document.querySelector(".billTotal");

//get a reference to the billString
var billStringElement = document.querySelector(".billString");

var billTotalElement = document.querySelector('.calculateBtn')


//create the function that will be called when the calculate button is pressed

function calcBtnClicked(){
    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }

        if (billTotal>=30){
        document.querySelector(".billTotal").classList.add("danger");
        }
        else if (billTotal < 30) {
            document.querySelector(".billTotal").classList.remove("warning");
        }
        if(billTotal>=20){
        document.querySelector(".billTotal").classList.add("warning");
        }
        if (billTotal < 20) {
            document.querySelector(".billTotal").classList.remove("danger");
        }
    }
    var roundedBillTotal = billTotal.toFixed(2);
    totalBill.innerHTML = roundedBillTotal;
}

billTotalElement.addEventListener('click', calcBtnClicked)
    // bill.addEvenListener('click', function(){
    
    

//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
