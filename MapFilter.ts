const numbers4:number[]=[1,2,3,4,5,6,7,8]

const doubledata:number[] = numbers4.map((curVal:number)=>curVal*2

)

console.log(doubledata)

const numberTostring:string[]=numbers4.map((curEle)=> curEle.toString())
console.log(numberTostring)

const evenNumbers:number[]=numbers4.filter((curVal:number)=>
    curVal % 2 ===0
)

console.log(evenNumbers)