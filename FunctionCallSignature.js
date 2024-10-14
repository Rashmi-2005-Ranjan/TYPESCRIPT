var student1 = {
    name: "Ravi Kumar",
    age: 23,
    greet: function (country) {
        return "My name is ".concat(student1.name, ", I am ").concat(student1.age, " years old, and I am from ").concat(country);
    }
};
var student2 = {
    name: "Rishi Kumar",
    age: 25,
    greet: function (country) {
        return "My name is ".concat(student2.name, ", I am ").concat(student2.age, " years old, and I am from ").concat(country);
    }
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "My name is ".concat(name, ", I am ").concat(age, " years old");
};
console.log("Studnent-1 Intro : ", student1.greet("India"));
console.log();
console.log("Studnent-2 Intro : ", student2.greet("Nepal"));
var employee1 = {
    name: "Ravi Kumar",
    age: 35,
    teachSubject: function (Topic) {
        return "My Name is ".concat(employee1.name, " and I am ").concat(employee1.age, " years Old and My Expertise is ").concat(Topic);
    }
};
var employee2 = {
    name: " Karan",
    age: 32,
    teachSubject: function (Topic) {
        return "My Name is ".concat(employee2.name, " and I am ").concat(employee2.age, " years Old and My Expertise is ").concat(Topic);
    }
};
var employee3 = {
    name: "Ramesh",
    age: 32,
    teachSubject: function (Topic) {
        return "My Name is ".concat(employee3.name, " and I am ").concat(employee3.age, " years Old and My Expertise is ").concat(Topic);
    }
};
var employee4 = {
    name: "Arjun",
    age: 32,
    teachSubject: function (Topic) {
        return "My Name is ".concat(employee4.name, " and I am ").concat(employee4.age, " years Old and My Expertise is ").concat(Topic);
    }
};
console.log("Teacher 1 Intro: ", employee1.teachSubject("Type Script"));
console.log("Teacher 2 Intro: ", employee2.teachSubject("Java"));
console.log("Teacher 3 Intro: ", employee3.teachSubject("Java Script"));
console.log("Teacher 4 Intro: ", employee4.teachSubject("HTML,CSS"));
