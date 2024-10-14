var num2;
num2 = 5;
num2 = true;
num2 = "Type Script";
console.log(num2);
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "string") {
    console.log(num2 + " " + "Type is String");
}
else {
    console.log("Type Changed ");
}
