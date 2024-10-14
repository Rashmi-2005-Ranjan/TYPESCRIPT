var inputValue = function (value) {
};
inputValue(55);
inputValue("Hello Typescript");
inputValue(true);
var operationOnInput = function (input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else {
        return 2 * input;
    }
};
console.log("Input Type Is String", operationOnInput("Hello TypeScript"));
console.log();
console.log("Input Type Is Number", operationOnInput(10));
