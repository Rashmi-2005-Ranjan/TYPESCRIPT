const person:{
    name: string,
    age: number,
    isStudent:boolean,
    address:{city:string,country:string}
}={

    name: "John",
    age:23,
    isStudent:true,
    address:{
        city: "New York",
        country: "USA"
    }
}

console.log("Name : ",person.name)
console.log("Age : ",person.age)
console.log("Is Student : ",person.isStudent)
console.log("Address : ",person.address)

const product:{
    name:string,
    price:number,
    quantity:number
}={
    name:"Laptop",
    price:1000,
    quantity:5
}
console.log("Name : ",product.name)
console.log("Price : ",product.price)
console.log("Quantity : ",product.quantity)
