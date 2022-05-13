var settingsBill = document.querySelector('.billItemTypeWithSettings')
var settingsBtn = document.querySelector('.updateSettings')

let callCostSetting = document.querySelector(".callCostSetting")
let smsCostSetting = document.querySelector(".smsCostSetting")
let warningLevelSetting = document.querySelector(".warningLevelSetting")
let criticalLevelSetting = document.querySelector(".criticalLevelSetting")

// declare the instance which is going to get the functions in the factory function
let settingsBillFactory = BillWithSettings();

function addCountTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;
        if (billItemTypeWithSettings === "call") {
            // get the function used to make a call and sms in the factory function using the instance
            settingsBillFactory.makeCall();
        }
        else if (billItemTypeWithSettings === "sms") {
            settingsBillFactory.sendSms();
        }

     // get the function used to get total calls and sms's in the factory function using the instance

        document.querySelector(".callTotalSettings").innerHTML = settingsBillFactory.getTotalCallCost().toFixed(2);
        document.querySelector(".smsTotalSettings").innerHTML = settingsBillFactory.getTotalSmsCost().toFixed(2);
        document.querySelector(".totalSettings").innerHTML = settingsBillFactory.getTotalCost().toFixed(2);
        console.log(settingsBillFactory.totalClassName());
        document.querySelector(".totalSettings").classList.remove("warning");

        document.querySelector(".totalSettings").classList.remove("danger");
        document.querySelector(".totalSettings").classList.add(settingsBillFactory.totalClassName());
    }
}



settingsBtn.addEventListener('click', function () {
    settingsBillFactory.setCallCost(Number(callCostSetting.value));
    settingsBillFactory.setSmsCost(Number(smsCostSetting.value));
    settingsBillFactory.setWarningLevel(Number(warningLevelSetting.value));
    settingsBillFactory.setCriticalLevel(Number(criticalLevelSetting.value))
    console.log(settingsBillFactory.getCriticalLevel());
    document.querySelector(".totalSettings").classList.remove("warning");

    document.querySelector(".totalSettings").classList.remove("danger");
    document.querySelector(".totalSettings").classList.add(settingsBillFactory.totalClassName());
   
});
document.querySelector('.addBtn').addEventListener('click', addCountTotal)
