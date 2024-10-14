/*
type Person = {
    name: string,
    age: number,
    isStudent:boolean,
    address:{city:string,country:string}
}

const person1:Person={

    name: "John",
    age:23,
    isStudent:true,
    address:{
        city: "New York",
        country: "USA"
    }
}
const person2:Person={

    name: "Morgan",
    age:21, 
    isStudent:true,
    address:{
        city: "New York",
        country: "England"
    }
}
const person3:Person={

    name: "David",
    age:23,
    isStudent:true,
    address:{
        city: "New York",
        country: "USA"
    }
}

console.log("Name : ",person1.name)
console.log("Age : ",person1.age)
console.log("Is Student : ",person1.isStudent)
console.log("Address : ",person1.address)

console.log("Name : ",person2.name)
console.log("Age : ",person2.age)
console.log("Is Student : ",person2.isStudent)
console.log("Address : ",person2.address)

console.log("Name : ",person3.name)
console.log("Age : ",person3.age)
console.log("Is Student : ",person3.isStudent)
console.log("Address : ",person3.address)
*/
type Product={
    name:string,
    price:number,
    quantity:number
}

const product1:Product={
    name:"Laptop",
    price:1000,
    quantity:5
}
const product2:Product={
    name:"Book",
    price:100,
    quantity:5
}
const product3:Product={
    name:"Bag",
    price:800,
    quantity:20
}

const calculateTotalPrice=(producttype:Product)=>{
    return producttype.price*producttype.quantity
}
console.log("The Price Of The Product is : ",calculateTotalPrice(product1))
console.log("The Price Of The Product is : ",calculateTotalPrice(product2))
console.log("The Price Of The Product is : ",calculateTotalPrice(product3))