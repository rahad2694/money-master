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
    let monthlyCost = updateExpenses();
    totalExpenses.innerText = monthlyCost;
    balanceBeforeSave.innerText = Number(incomeInputBox.value) - monthlyCost;
}
function updateExpenses(){
    if(isNaN(incomeInputBox.value)){
        
    }
    const expenses = Number(foodInputBox.value) + Number(rentInputBox.value) + Number(clothesInputBox.value);
    return expenses;
}