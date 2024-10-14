/*
//----------------->Parameter
function greet(name:string,id:number){

    console.log(`Welcome ${name}......Your Id is ${id}`)
}


//--------->Argument
greet("Vinod",101)
*/

/*
//Using Arrow Function
const giveGreet=(name:string,id:number)=>{
    console.log(`Welcome ${name}......Your Id is ${id}`)
}

giveGreet("Vinod",1)
*/

/*
const giveGreet = (name: string, id: number): string => {
  return `Welcome ${name}......Your Id is ${id}`;
};

let greet=giveGreet("Vinod", 1);

console.log(greet)
*/
/*
const isPalindrom = (str: string):boolean => {
  let mypalin = str.split("").reverse().join("");
  return str === mypalin;
};

const result = isPalindrom("12345");
console.log("Is Palindrom : ", result);
*/

/*
const calculateAverage=(array:Array<number>)=>{
    let sum=0,avg;
    for (const element of array) {
       sum+=element
        avg=sum/array.length
    }
    return avg
}
console.log("The Average Of The Array Elements are : ",calculateAverage([48,78,65,94,24]))
*/

const calculateMaximum = (array: Array<number>) => {
    let max = 0;
    for (const element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max; 
};

console.log("The Maximum Value Of The Array Element is : ", calculateMaximum([100,200,300,400,500,600,700,800,900,1000]));