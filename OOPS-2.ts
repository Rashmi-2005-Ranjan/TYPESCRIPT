//Inheritance and Super Keyword

class Human {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `My name is ${this.name} and I am ${
      this.age
    } years old. I Love ${this.hobbies.join(",")}`;
  }
}

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

class student extends Human {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }
  introduce(): string {
    return `${super.introduce()} , I am in Class ${this.grade}`;
  }
}

const s1: student = new student("Rashmi", 19, ["reading"], 12);
console.log(s1.introduce());
