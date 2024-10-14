// PRACTICE TIME
// Q1: Bank Account Balance
// Create a TypeScript class BankAccount with a private property_balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non- negative. Otherwise, log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated balance.
//Try setting a negative balance using the setter. What output do you expect?
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            if (value >= 0) {
                this._balance = value;
            }
            else {
                throw new Error("Balance Is Not Negative");
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account1 = new BankAccount();
// account1.balance = 1000;
account1.balance = -1000;
console.log("The Balance Available In This Account is : ", account1.balance);
//Q2: Temperature Converter / Define a TypeScript class Temperature with a private property_celsius set to 8. /
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius. method fahrenheit that converts Celsius to Fahrenheit using the
// Implement a formula (C 9/5) + 32. // Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F-32) 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius. What Celsius value do you expect?
