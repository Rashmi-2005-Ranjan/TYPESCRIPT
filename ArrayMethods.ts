console.log("push() Method")
const fruits:string[]=["Apple","Banana","Cherry"]

console.log("Adding One Element into Array Through Push Method")
fruits.push("Dragon Fruit")
console.log("New Array After Adding One Element : ",fruits)

console.log("Adding Multiple Element into Array Through Push Method")
fruits.push("Gwava","Pine Apple","Mango","Coconut")
console.log("New Array After Adding Multiple Element :",fruits)


console.log("Pop() Method")

fruits.pop()
console.log("After Pop : ",fruits)


console.log("Unshift() Method")
console.log("Adding One Element in Array From Starting Using Unshift()")
fruits.unshift("Custard Apple")
console.log("Adding one Element in Array From Starting Using Unshift()",fruits)
fruits.unshift("Lemon","Khojoor","Kiwi","Grapes")
console.log("Adding Multiple Elements in Array From Starting Using Unshift()",fruits)


 for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]) 
 }