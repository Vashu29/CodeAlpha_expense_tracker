let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ''){
        alert('Please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }
    if(date === ''){
        alert('Please select date');
        return;
    }

    // Add the new expense to the expenses array
    expenses.push({category, amount, date});

    // Update total amount
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Create a new row for the new expense
    const newRow = expenseTableBody.insertRow();

    // Insert cells into the new row and populate them with data
    const categoryCell = newRow.insertCell();
    categoryCell.textContent = category;

    const AmountCell = newRow.insertCell();
    AmountCell.textContent = amount;

    const dateCell = newRow.insertCell();
    dateCell.textContent = date;

    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        const index = expenses.findIndex(expense => expense.date === date);
        const deletedExpense = expenses[index];
        totalAmount -= deletedExpense.amount;
        totalAmountCell.textContent = totalAmount;
        expenses.splice(index, 1);
        expenseTableBody.removeChild(newRow);
    });

    deleteCell.appendChild(deleteBtn);

    // Clear the input fields after adding the expense
    categorySelect.value = '';
    amountInput.value = '';
    dateInput.value = '';
});














/*let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category === ''){
        alert('please select a category')
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('please enter a valid amount')
        return;
    }
    if(date === ''){
        alert('please select date')
        return;
    }
    expenses.push({category,amount,date})

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expenses.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn)
    
})

for(const expense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
    
}
*/