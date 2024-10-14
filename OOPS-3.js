var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter for name
        get: function () {
            return this._name;
        },
        // Setter for name
        set: function (newName) {
            if (newName.length > 0) {
                this._name = newName;
            }
            else {
                throw new Error("Name Can't Be Empty");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        // Getter for age
        get: function () {
            return this._age;
        },
        // Setter for age
        set: function (newAge) {
            if (newAge > 0 && newAge < 150) {
                this._age = newAge;
            }
            else {
                throw new Error("Age is Not Valid");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var prson1 = new Person("Rashmi", 19);
console.log(prson1.name);
console.log(prson1.age);
// prson1.age=512;
// console.log(prson1.age)
// prson1.name="";
// console.log(prson1.name)
