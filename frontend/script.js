const API_URL = "http://localhost:8080/api/expenses";

const expenseForm = document.getElementById("expenseForm");
const expenseTable = document.getElementById("expenseTable");
const totalElement = document.getElementById("total");


// Load expenses when page opens
loadExpenses();


// Add expense
expenseForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    const expense = {
        description: description,
        category: category,
        amount: Number(amount)
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    });

    expenseForm.reset();

    loadExpenses();
});


// Get all expenses
async function loadExpenses() {

    const response = await fetch(API_URL);

    const expenses = await response.json();

    expenseTable.innerHTML = "";

    let total = 0;

    expenses.forEach(function (expense) {

        total += expense.amount;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.id}</td>
            <td>${expense.description}</td>
            <td>${expense.category}</td>
            <td>₹${expense.amount}</td>
            <td>
    <button class="action-button"
            onclick="editExpense(${expense.id})">
        Edit
    </button>

    <button class="action-button"
            onclick="deleteExpense(${expense.id})">
        Delete
    </button>
</td>
        `;

        expenseTable.appendChild(row);
    });

    totalElement.textContent = total;
}


// Delete expense
async function deleteExpense(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadExpenses();
}
async function editExpense(id) {

    const description = prompt("Enter new description:");

    if (description === null) {
        return;
    }

    const category = prompt("Enter new category:");

    if (category === null) {
        return;
    }

    const amount = prompt("Enter new amount:");

    if (amount === null) {
        return;
    }

    const updatedExpense = {
        description: description,
        category: category,
        amount: Number(amount)
    };

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedExpense)
    });

    loadExpenses();
}