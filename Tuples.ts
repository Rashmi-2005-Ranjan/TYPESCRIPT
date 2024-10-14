type Personinfo= readonly [string,number,boolean]

const Person1:Personinfo=['Aditya',28,true]
const Person2:Personinfo=['Karan',29,true]
// const Person3:Personinfo=[19,'Mangal',true]  -->Provide Error

const displayPersonInfo=(info:Personinfo):void =>{
    const[name,age,haslicence]=info
    console.log(`Name : ${name}\nAge : ${age}\nHas Driving Licence : ${haslicence? "Yes":"No"}`)
}


displayPersonInfo(Person1)
console.log()
displayPersonInfo(Person2)
console.log()


// type ProductInfo = readonly[Productname:string,Price:number,QuantityInStock:number]
type ProductInfo = readonly[string,number,number]

const Product1:ProductInfo=["Buscuit",10,100]
const Product2:ProductInfo=["Cake",20,200]

const ProductInfo=(Product:ProductInfo):void=>{
    const[Productname,Price,Availability]=Product
    console.log(`Product Name : ${Productname}\nPrice : ${Price}\nAvailability : ${Availability}`)
    }
ProductInfo(Product1)
console.log()
ProductInfo(Product2)
console.log()
