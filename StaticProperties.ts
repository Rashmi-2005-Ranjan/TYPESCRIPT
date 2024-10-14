class MathOperations{
    public static PI:number=Math.PI;
    public static add(num1:number,num2:number):number{
        return num1+num2
    }
    public static sub(num1:number,num2:number):number{
        return num1-num2
    }
    public static mul(num1:number,num2:number):number{
        return num1*num2
    }
    public static div(num1:number,num2:number):number{
        return num1/num2
    }
    public static modulus(num1:number,num2:number):number{
        return num1%num2
    }
}

console.log("The Value Of PI is : ",MathOperations.PI)
console.log()
console.log("The Addition Of  25 and 5 is : ",MathOperations.add(25,5))
console.log()
console.log("The Substraction Of  25 and 5 is : ",MathOperations.sub(25,5))
console.log()
console.log("The Multiplication Of 25 and 5 is : ",MathOperations.mul(25,5))
console.log()
console.log("The Division Of 25 and 5 is : ",MathOperations.div(25,5))
console.log()
console.log("The Remainder Of 25 and 5 is : ",MathOperations.modulus(25,5))
