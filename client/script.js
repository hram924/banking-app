// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const accountForm = document.getElementById('accountForm');
    const transferForm = document.getElementById('transferForm');
    const accountsList = document.getElementById('accountsList');
    const transactionsList = document.getElementById('transactionsList');

    // Placeholder for accounts and transactions
    let accounts = [];
    let transactions = [];

    // Function to render accounts
    function renderAccounts() {
        accountsList.innerHTML = '';
        accounts.forEach(account => {
            const accountDiv = document.createElement('div');
            accountDiv.textContent = `Account Number: ${account.accountNumber}, Balance: ${account.balance}`;
            accountsList.appendChild(accountDiv);
        });
    }

    // Function to render transactions
    function renderTransactions() {
        transactionsList.innerHTML = '';
        transactions.forEach(transaction => {
            const transactionDiv = document.createElement('div');
            transactionDiv.textContent = `Transfer from: ${transaction.fromAccount} to: ${transaction.toAccount} Amount: ${transaction.amount}`;
            transactionsList.appendChild(transactionDiv);
        });
    }

    // Event listener for account creation
    accountForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('accountNumber').value;
        const balance = parseFloat(document.getElementById('balance').value);

        // Add the new account to the accounts array
        accounts.push({ accountNumber, balance });
        renderAccounts();

        // Clear the form
        accountForm.reset();
    });

    // Event listener for money transfer
    transferForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fromAccount = document.getElementById('fromAccount').value;
        const toAccount = document.getElementById('toAccount').value;
        const amount = parseFloat(document.getElementById('transferAmount').value);

        // Find the accounts
        const fromAccountObj = accounts.find(acc => acc.accountNumber === fromAccount);
        const toAccountObj = accounts.find(acc => acc.accountNumber === toAccount);

        // Validate transfer
        if (fromAccountObj && toAccountObj && fromAccountObj.balance >= amount) {
            // Perform the transfer
            fromAccountObj.balance -= amount;
            toAccountObj.balance += amount;

            // Record the transaction
            transactions.push({ fromAccount, toAccount, amount });
            renderAccounts();
            renderTransactions();

            // Clear the form
            transferForm.reset();
        } else {
            alert('Transfer failed. Check account numbers and balance.');
        }
    });
});
