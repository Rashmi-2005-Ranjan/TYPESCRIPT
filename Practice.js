var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.OwnerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br><br>");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (value) {
            this._weight = value;
        },
        enumerable: false,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
// Usage
var spot = new Animal("spot", "Doug");
spot.favFood = "Bones"; // Set the favorite food
spot.OwnerInfo();
spot.weight = 100; // Use the setter to assign value to _weight
