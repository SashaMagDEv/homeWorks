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
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума для зняття має бути додатньою");
            return;
        }
        if(this.balance < amount) {
            console.log("Недостатньо коштів на рахунку")
            return;
        }
        this.balance -= amount
    }
}
const account = new BankAccount(1000)

console.log(account.getBalance());

account.deposit(500);
console.log(account.getBalance());

account.deposit(200);
console.log(account.getBalance());
account.deposit(300);

console.log(account.getBalance());

account.withdraw(4000);
console.log(account.getBalance());