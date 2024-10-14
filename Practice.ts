class Animal {
    public favFood: string; // This property can be initialized later

    static numOfAnimals: number = 0;

    private _weight: number;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    OwnerInfo() {
        document.write(this.name + " is owned by " + this.owner + "<br><br>");
    }

    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }
}

// Usage
let spot = new Animal("spot", "Doug");
spot.favFood = "Bones"; // Set the favorite food
spot.OwnerInfo();
spot.weight = 100; // Use the setter to assign value to _weight
