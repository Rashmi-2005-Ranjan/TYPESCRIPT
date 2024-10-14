var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.sub = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.mul = function (num1, num2) {
        return num1 * num2;
    };
    MathOperations.div = function (num1, num2) {
        return num1 / num2;
    };
    MathOperations.modulus = function (num1, num2) {
        return num1 % num2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log("The Value Of PI is : ", MathOperations.PI);
console.log();
console.log("The Addition Of  25 and 5 is : ", MathOperations.add(25, 5));
console.log();
console.log("The Substraction Of  25 and 5 is : ", MathOperations.sub(25, 5));
console.log();
console.log("The Multiplication Of 25 and 5 is : ", MathOperations.mul(25, 5));
console.log();
console.log("The Division Of 25 and 5 is : ", MathOperations.div(25, 5));
console.log();
console.log("The Remainder Of 25 and 5 is : ", MathOperations.modulus(25, 5));
