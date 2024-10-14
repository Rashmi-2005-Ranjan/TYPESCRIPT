const inputValue=(value:number|string|boolean):void=>{

}

inputValue(55)
inputValue("Hello Typescript")
inputValue(true)


const operationOnInput=(input:string|number):any=>{
    if (typeof input === 'string'){
        return input.toUpperCase()
    }
    else{
        return 2*input
    }
}

console.log("Input Type Is String",operationOnInput("Hello TypeScript"))
console.log()
console.log("Input Type Is Number",operationOnInput(10))



//Intersection Type

type Personal={
    name:string;
    age:number
}

type Professional={
    emp_id:number;
    department:string
}

//Intersection Type
type StaffDetails = Personal & Professional
const employee:StaffDetails={
    name:"John Doe",
    age:30,
    emp_id:12345,
    department:"HR"
}

//Union Type
type StaffDetailss = Personal | Professional

const Person4:Personal={
    name:"John Doe",
    age:30,
}
const Person5:Professional={
    emp_id:12345,
    department:"HR"
}