var settingsBill = document.querySelector('.billItemTypeWithSettings')
//var addButtn= document.querySelector('.addBtn')
var settingsBtn = document.querySelector('.updateSettings')
// var stopCount= document.querySelector("addBtn").disabled

//var callTotalThree = document.querySelector(".callTotalSettings")
let callCostSetting = document.querySelector(".callCostSetting")
let smsCostSetting = document.querySelector(".smsCostSetting")
let warningLevelSetting = document.querySelector(".warningLevelSetting")
let criticalLevelSetting = document.querySelector(".criticalLevelSetting")

//var smsTotalThree= document.querySelector(".smsTotalSettings")

//var totalThree= document.querySelector(".totalSettings")
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

var callTotal = 0;
var smsTotal = 0;
var totalCost = 0;



function addCountTotal() {
    //alert("gh")
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;
        if (billItemTypeWithSettings === "call") {
            if (callTotal < criticalLevel) {
                callTotal += callCost;
            }
        }
        else if (billItemTypeWithSettings === "sms") {
            if (smsTotal < criticalLevel) {
                smsTotal += smsCost;
            }
        }
        
        document.querySelector(".callTotalSettings").innerHTML = callTotal.toFixed(2);
        document.querySelector(".smsTotalSettings").innerHTML = smsTotal.toFixed(2);
        totalCost = callTotal + smsTotal;
        document.querySelector(".totalSettings").innerHTML = totalCost.toFixed(2);
        
        if (totalCost >= criticalLevel) {
            document.querySelector(".totalSettings").classList.add("danger");
        }
        else if (totalCost < criticalLevel) {
            document.querySelector(".totalSettings").classList.remove("warning");
        }
        if (totalCost >= warningLevel) {
            document.querySelector(".totalSettings").classList.add("warning");
        }
        if (totalCost < warningLevel) {
            document.querySelector(".totalSettings").classList.remove("danger");
        }
        
    }
}
settingsBtn.addEventListener('click', function () {
    //  alert("go")
    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);

    if (totalCost >= criticalLevel) {
        document.querySelector(".totalSettings").classList.add("danger");
    }
    else if (totalCost < criticalLevel) {
        document.querySelector(".totalSettings").classList.remove("warning");
    }
    if (totalCost >= warningLevel) {
        document.querySelector(".totalSettings").classList.add("warning");
    }
    if (totalCost < warningLevel) {
        document.querySelector(".totalSettings").classList.remove("danger");
    }
});
document.querySelector('.addBtn').addEventListener('click', addCountTotal)
