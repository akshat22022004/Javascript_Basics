const e = require("express");

document.addEventListener("DOMContentLoaded", () => {   
    const expenseform = document.getElementById("expense-form");
    const expenseInputName = document.getElementById("expense-name");
    const expenseInputAmount = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-expense");

    let expenses = [];
    let totalAmount = calculateTotal(expenses);

    renderExpenses();

    expenseform.addEventListener('sumbit',(e) => {
        e.preventDefault();
        const name = expenseInputName.value.trim();
        const amount = parseInt(expenseInputAmount.value.trim());
        if(!name || !amount) return;

        const newExpense = {
            id : Date.now(),
            name: name,
            amount: amount,
        }
        expenses.push(newExpense);
        saveExpensesToLocal();;
        updateTotal();
        renderExpenses(expenses);



        // clear  input
        expenseInputName.value = "";
        expenseInputAmount.value = "";

    });

    function calculateTotal(expenses){
       return expenses.reduce((total, expense) => total + expense.amount, 0);  
    }
    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount;

    }
    function saveExpensesToLocal(){
        localStorage.setItem("expenses", JSON.stringify(expenses));

    }
    function renderExpenses() {
        expenseList.innerHTML = ""; // clear the content
        expenses.forEach((expense) => { // loop through the expenses
            const expenseItem = document.createElement("li"); // create a list item
            expenseItem.textContent = `${expense.name} - Rs.${expense.amount}`; // render here
            expenseList.appendChild(expenseItem);
        });
    }
    function deleteExpense(id) {
        expenses = expenses.filter((expense) => expense.id !== id);
        saveExpensesToLocal();
        updateTotal();
        renderExpenses();
    }   
});