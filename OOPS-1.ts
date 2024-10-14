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

class Persons{
    name:string;
    age:number;
    hobbies:string[] ;

    constructor(
        name:string,
        age:number,
        hobbies:string[]
    ){
      this.name=name;
      this.age=age;
      this.hobbies=hobbies
    }
    }

    const person1:Persons=new Persons("Rashmi",19,["reading","playing"]);
    const person2:Persons=new Persons("Ranjan",21,["reading","playing"]);
    const person3:Persons=new Persons("Rahul",22,["reading","playing"]);
    const person4:Persons=new Persons("Rakesh",20,["reading","playing"]);
    const person5:Persons=new Persons("Ramesh",23,["reading","playing"]);

    console.log(person1)
    console.log(person2)
    console.log(person3)
    console.log(person4)
    console.log(person5)




