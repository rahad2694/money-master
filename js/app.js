const incomeInputBox = document.getElementById('income-input-box');
const foodInputBox = document.getElementById('food-input-box');
const rentInputBox = document.getElementById('rent-input-box');
const clothesInputBox = document.getElementById('clothes-input-box');
const saveInputBox = document.getElementById('save-input-box');
const totalExpenses = document.getElementById('total-expenses');
const balanceBeforeSave = document.getElementById('balance-before-save');
const saveAmount = document.getElementById('save-amount');
const balanceAfterSave = document.getElementById('balance-after-save');

function updateTotal(){
    errorMessageCheck('income');
    errorMessageCheck('food');
    errorMessageCheck('rent');
    errorMessageCheck('clothes');
    let monthlyCost = updateExpenses();
    if(incomeInputBox.value > 0 && foodInputBox.value > 0 && rentInputBox.value > 0 &&clothesInputBox.value > 0){
        if(incomeInputBox.value < monthlyCost){
            document.getElementById('higher-expense-alert').classList.remove('d-none');
            totalExpenses.innerText = '00';
            balanceBeforeSave.innerText = '00';
            saveAmount.innerText = '00';
            balanceAfterSave.innerText = '00';
        } else{
            totalExpenses.innerText = monthlyCost;
            balanceBeforeSave.innerText = Number(incomeInputBox.value) - monthlyCost;
            document.getElementById('higher-expense-alert').classList.add('d-none');
        }
    }
    else{
        totalExpenses.innerText = '00';
        balanceBeforeSave.innerText = '00';
        saveAmount.innerText = '00';
        balanceAfterSave.innerText = '00';
    }
}
function errorMessageCheck(targetField){
    const targetFieldBoxId = targetField + '-input-box';
    const targetFieldBox = document.getElementById(targetFieldBoxId); 
    const stringAlertId = 'string-alert-in-'+targetField;
    const negativeAlertId = 'negative-alert-in-'+targetField;
    if(targetFieldBox.value < 0){
        document.getElementById(negativeAlertId).classList.remove('d-none');
        document.getElementById(stringAlertId).classList.add('d-none');
        targetFieldBox.classList.add('bg-warning');
        saveAmount.innerText = '00';
        balanceAfterSave.innerText = '00';
        targetFieldBox.value ='';
        return;
    } else if (isNaN(targetFieldBox.value)){
        document.getElementById(stringAlertId).classList.remove('d-none');
        document.getElementById(negativeAlertId).classList.add('d-none');
        targetFieldBox.classList.add('bg-warning');
        saveAmount.innerText = '00';
        balanceAfterSave.innerText = '00';
        targetFieldBox.value ='';
        return;
    } else if (targetFieldBox.value >0){
        document.getElementById(stringAlertId).classList.add('d-none');
        document.getElementById(negativeAlertId).classList.add('d-none');
        targetFieldBox.classList.remove('bg-warning');
    }
}
function updateExpenses(){
    const expenses = Number(foodInputBox.value) + Number(rentInputBox.value) + Number(clothesInputBox.value);
    return expenses;
}

document.getElementById('save-button').addEventListener('click',function(){
    errorMessageCheck('save');
    if(saveInputBox.value > 0 && saveInputBox.value <= 100){
        const saveTotal = Number(incomeInputBox.value) * (Number(saveInputBox.value)/100);
        document.getElementById('wrong-percentage-alert').classList.add('d-none');
        if(balanceBeforeSave.innerText > saveTotal){
            saveAmount.innerText = saveTotal;
            balanceAfterSave.innerText = balanceBeforeSave.innerText - saveAmount.innerText;
            document.getElementById('low-balance-alert').classList.add('d-none');
        }
        else{
            document.getElementById('low-balance-alert').classList.remove('d-none');
            document.getElementById('negative-alert-in-save').classList.add('d-none');
            document.getElementById('string-alert-in-save').classList.add('d-none');
            saveAmount.innerText = '00';
            balanceAfterSave.innerText = '00';
            saveInputBox.value ='';
        }
    }
    else if(saveInputBox.value>100){
        document.getElementById('wrong-percentage-alert').classList.remove('d-none');
        saveAmount.innerText = '00';
        balanceAfterSave.innerText = '00';
        saveInputBox.value ='';
    }
})