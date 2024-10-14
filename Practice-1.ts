// PRACTICE TIME

// Q1: Bank Account Balance
// Create a TypeScript class BankAccount with a private property_balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non- negative. Otherwise, log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated balance.
//Try setting a negative balance using the setter. What output do you expect?

class BankAccount {
  private _balance: number = 0;
  public get balance(): number {
    return this._balance;
  }
  public set balance(value: number) {
    if (value >= 0) {
      this._balance = value;
    } else {
      throw new Error("Balance Is Not Negative");
    }
  }
}
const account1: BankAccount = new BankAccount();
// account1.balance = 1000;
account1.balance = -1000;
console.log("The Balance Available In This Account is : ",account1.balance)

