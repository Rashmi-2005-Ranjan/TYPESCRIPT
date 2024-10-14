//Declare An Array In Typescript

//1. Using Square Brackets

const numbers1:number[]=[1,2,3,4,5,6,7,8] 

//2. Using Array Constructor

const numbers2:number[]=new Array(1,2,3,4,5,6,7,8) 

//2. Using Array Methods

const names:string[]=Array.of("Java","C","C++","Java Script","Type Script")

const numbers3:number[]=Array.of(1,2,3,4,5,6,7,8,9,10)

console.log("Using Square Brackets",numbers1)
console.log("Using Array Constructor",numbers2)
console.log("Using Array Methods",names)
console.log("Using Array Methods",numbers3)

console.log(names[1])
console.log(names.length)
