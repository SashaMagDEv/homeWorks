class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("сума для внесення має бути додатньою");
        }
    }
}
const account = new BankAccount(1000)

console.log(account.getBalance());

account.deposit(500);
console.log(account.getBalance());

account.deposit(-200);
console.log(account.getBalance());

account.deposit(300);
console.log(account.getBalance());