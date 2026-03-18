// Exercise: Bank Account
//
// Practice: classes, private properties, methods, getters, validation.
//
// Create a BankAccount class with:
// - A private balance (starts at the initial deposit)
// - A readonly accountHolder (string)
// - deposit(amount) — adds to balance, throws if amount <= 0
// - withdraw(amount) — subtracts from balance, throws if amount <= 0 or insufficient funds
// - A getter for the current balance
//
// Example:
//   const account = new BankAccount("Alice", 100);
//   account.deposit(50);
//   account.balance        // 150
//   account.withdraw(30);
//   account.balance        // 120
//   account.withdraw(200); // throws Error("Insufficient funds")
//   account.deposit(-10);  // throws Error("Deposit amount must be positive")

// Your code here


// Test your implementation:
// const account = new BankAccount("Alice", 100);
// account.deposit(50);
// console.log(account.balance);       // 150
// account.withdraw(30);
// console.log(account.balance);       // 120
// console.log(account.accountHolder); // "Alice"
