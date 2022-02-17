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
    erroHandle('income');
    erroHandle('food');
    erroHandle('rent');
    erroHandle('clothes');
    
    let monthlyCost = updateExpenses();
    totalExpenses.innerText = monthlyCost;
    balanceBeforeSave.innerText = Number(incomeInputBox.value) - monthlyCost;
}

function erroHandle(targetField){
    const targetFieldBoxId = targetField + '-input-box';
    const targetFieldBox = document.getElementById(targetFieldBoxId); 
    const stringAlertId = 'string-alert-in-'+targetField;
    const negativeAlertId = 'negative-alert-in-'+targetField;
    if(targetFieldBox.value < 0){
        document.getElementById(negativeAlertId).classList.remove('d-none');
        document.getElementById(stringAlertId).classList.add('d-none');
        targetFieldBox.value ='';
        return;
    } else if (isNaN(targetFieldBox.value)){
        document.getElementById(stringAlertId).classList.remove('d-none');
        document.getElementById(negativeAlertId).classList.add('d-none');
        targetFieldBox.value ='';
        return;
    } else if (targetFieldBox.value >0){
        document.getElementById(stringAlertId).classList.add('d-none');
        document.getElementById(negativeAlertId).classList.add('d-none');
        // return;
    }
}
function updateExpenses(){
    const expenses = Number(foodInputBox.value) + Number(rentInputBox.value) + Number(clothesInputBox.value);
    return expenses;
}