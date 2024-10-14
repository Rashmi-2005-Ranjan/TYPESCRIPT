//Q2: Temperature Converter
// Define a TypeScript class Temperature with a private property_celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
//Implement a Getter method fahrenheit that converts Celsius to Fahrenheit using the formula (C 9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F-32) * 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius. What Celsius value do you expect?
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (value) {
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "farenhite", {
        get: function () {
            return (this._celsius * 9) / 5 + 32;
        },
        set: function (newFar) {
            this._celsius = ((newFar - 32) * 5) / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature();
temp.celsius = 25;
console.log(temp.farenhite);
temp.farenhite = 77;
console.log(temp.celsius);
