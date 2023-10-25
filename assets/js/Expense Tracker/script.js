const expenseInput = document.getElementById("expense");
const amountInput = document.getElementById("amount");
const addExpenseButton = document.getElementById("addExpense");
const expensesList = document.getElementById("expenses");
const totalDisplay = document.getElementById("total");
const darkModeToggle = document.getElementById("toggleMode");

let totalExpenses = 0;

addExpenseButton.addEventListener("click", addExpense);

function addExpense() {
  const expense = expenseInput.value;
  const amount = parseFloat(amountInput.value);

  if (expense.trim() === "" || isNaN(amount)) {
    alert("Please enter a valid expense description and amount.");
    return;
  }

  const expenseItem = document.createElement("li");
  expenseItem.innerHTML = `<strong>${expense}</strong> - $${amount.toFixed(2)}`;
  expensesList.appendChild(expenseItem);

  totalExpenses += amount;
  updateTotalDisplay();

  expenseInput.value = "";
  amountInput.value = "";
}

function updateTotalDisplay() {
  totalDisplay.textContent = `Total: $${totalExpenses.toFixed(2)}`;
}

darkModeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    labels.forEach(label => label.classList.toggle("label-dark"));
    inputs.forEach(input => input.classList.toggle("input-dark"));
    buttons.forEach(button => button.classList.toggle("button-dark"));
    expensesList.classList.toggle("dark-mode");
    listItems.forEach(item => item.classList.toggle("dark-mode"));
    totalDisplay.classList.toggle("dark-mode");
  }
  
