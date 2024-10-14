function logReturn<T>(Value: T): T {
  return Value;
}

console.log("Return Value : ",logReturn<number>(10))
console.log("Return Value : ",logReturn<boolean>(true))
console.log("Return Value : ",logReturn<boolean>(false))
console.log("Return Value : ",logReturn<string>("Hello Typescript"))
console.log()

function add<T extends number | string>(value1: T, value2: T): T {
    return (value1 as any) + (value2 as any);
}

console.log("The Additin is :",add(5,6))
console.log("The Additin is :",add("Type","Script"))
