type Student = {
    name: string,
    age: number,
    gender?: string,
    greet: (country: string) => string // Method Call Signature
}

const student1: Student = {
    name: "Ravi Kumar",
    age: 23,
    greet:(country:string) =>{
        return `My name is ${student1.name}, I am ${student1.age} years old, and I am from ${country}`;
    }
}

const student2: Student = {
    name: "Rishi Kumar",
    age: 25,
    greet:(country:string) => {
        return `My name is ${student2.name}, I am ${student2.age} years old, and I am from ${country}`;
    }
}

const introduction = (student1: Student) => {
    const { name, age } = student1;
    return `My name is ${name}, I am ${age} years old`;
}


console.log("Studnent-1 Intro : ",student1.greet("India"));
console.log()
console.log("Studnent-2 Intro : ",student2.greet("Nepal"));




type Employee = {
    name: string,
    age: number,
    gender?: string,
teachSubject:(Topic:string)=>string
}

const employee1:Employee={
    name:"Ravi Kumar",
    age:35,
    teachSubject:(Topic:string)=>{
        return `My Name is ${employee1.name} and I am ${employee1.age} years Old and My Expertise is ${Topic}`
    }
}
const employee2:Employee={
    name:" Karan",
    age:32,
    teachSubject:(Topic:string)=>{
        return `My Name is ${employee2.name} and I am ${employee2.age} years Old and My Expertise is ${Topic}`
    }
}
const employee3:Employee={
    name:"Ramesh",
    age:32,
    teachSubject:(Topic:string)=>{
        return `My Name is ${employee3.name} and I am ${employee3.age} years Old and My Expertise is ${Topic}`
    }
    }
const employee4:Employee={
    name:"Arjun",
    age:32,
    teachSubject:(Topic:string)=>{
        return `My Name is ${employee4.name} and I am ${employee4.age} years Old and My Expertise is ${Topic}`
    }
}


console.log("Teacher 1 Intro: ",employee1.teachSubject("Type Script"))
console.log("Teacher 2 Intro: ",employee2.teachSubject("Java"))
console.log("Teacher 3 Intro: ",employee3.teachSubject("Java Script"))
console.log("Teacher 4 Intro: ",employee4.teachSubject("HTML,CSS"))