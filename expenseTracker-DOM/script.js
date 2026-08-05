const form = document.getElementById("expenseForm");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseDate = document.getElementById("expenseDate");

const expenseList = document.getElementById("expenseList");

const totalExpense = document.getElementById("totalExpense");
const totalEntries = document.getElementById("totalEntries");

const expenseContainer = document.getElementById("expenseContainer");
const emptyMessage = document.getElementById("emptyMessage");

const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Hide expense list initially
expenseContainer.style.display = "none";

// ------------------------
// Add Expense
// ------------------------

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);
    let date = expenseDate.value;

    if(name === "" || amount === 0 || date === ""){

        alert("Please fill all fields.");
        return;

    }

    let expense = {

        name:name,
        amount:amount,
        date:date

    };

    expenses.push(expense);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    displayExpenses();

    form.reset();

});

// ------------------------
// Display Expenses
// ------------------------

function displayExpenses(){

    expenseList.innerHTML="";

    let total=0;

    if(expenses.length===0){

        emptyMessage.style.display="block";

    }
    else{

        emptyMessage.style.display="none";

    }

    expenses.forEach(function(expense,index){

        total += expense.amount;

        expenseList.innerHTML += `

        <tr>

            <td>${expense.name}</td>

            <td>₹${expense.amount}</td>

            <td>${expense.date}</td>

            <td>

                <button
                class="delete-btn"
                onclick="deleteExpense(${index})">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

    totalExpense.innerHTML="₹"+total;

    totalEntries.innerHTML=expenses.length;

}

// ------------------------
// Delete Expense
// ------------------------

function deleteExpense(index){

    expenses.splice(index,1);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    displayExpenses();

}

// ------------------------
// Show Expenses
// ------------------------

showBtn.addEventListener("click",function(){

    expenseContainer.style.display="block";

});

// ------------------------
// Hide Expenses
// ------------------------

hideBtn.addEventListener("click",function(){

    expenseContainer.style.display="none";

});

// ------------------------
// Initial Load
// ------------------------

displayExpenses();

if(expenses.length>0){

    expenseContainer.style.display="block";

}