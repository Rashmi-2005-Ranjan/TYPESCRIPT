//Inheritance and Super Keyword
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Human.prototype.introduce = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old. I Love ").concat(this.hobbies.join(","));
    };
    return Human;
}());
/*
    const h1:Human=new Human("Rashmi",19,["reading","playing"]);
    const h2:Human=new Human("Ranjan",21,["reading","playing"]);
    const h3:Human=new Human("Rahul",22,["reading","playing"]);
    const h4:Human=new Human("Rakesh",20,["reading","playing"]);
    const h5:Human=new Human("Ramesh",23,["reading","playing"]);
*/
/*
console.log(h1)
console.log(h2)
console.log(h3)
console.log(h4)
console.log(h5)
console.log(h1.introduce())
console.log(h2.introduce())
console.log(h3.introduce())
console.log(h4.introduce())
console.log(h5.introduce())
*/
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    student.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), " , I am in Class ").concat(this.grade);
    };
    return student;
}(Human));
var s1 = new student("Rashmi", 19, ["reading"], 12);
console.log(s1.introduce());
var Teachers = /** @class */ (function () {
    function Teachers() {
    }
    return Teachers;
}());
