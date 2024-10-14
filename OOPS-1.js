//Class and Object
/*
class Persons{
name:string="Rashmi";
age:number=29;
hobbies:string[]=['reading','paintaing'];
}

const person1:Persons=new Persons();

console.log(person1.name);
console.log(person1.hobbies);
*/
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var person1 = new Persons("Rashmi", 19, ["reading", "playing"]);
var person2 = new Persons("Ranjan", 21, ["reading", "playing"]);
var person3 = new Persons("Rahul", 22, ["reading", "playing"]);
var person4 = new Persons("Rakesh", 20, ["reading", "playing"]);
var person5 = new Persons("Ramesh", 23, ["reading", "playing"]);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
