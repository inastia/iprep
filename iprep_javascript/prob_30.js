// Problem 30
// account withdraw

const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    // subtract amount parameter from totalAmount property
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  },
};

const account2 = {
  name: 'James',
  totalAmount: 8000,
};

// use deductAmount method from account1 object on account2 object
const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};

// subtract 500 from account2, aka 8000
console.log(withdrawFromAccount(500)()); // Amount in account: 7500
// subtract another 200 from account2, akan 7500
console.log(withdrawFromAccount(200)()); // Amount in account: 7300
