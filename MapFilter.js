var numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
var doubledata = numbers4.map(function (curVal) { return curVal * 2; });
console.log(doubledata);
var numberTostring = numbers4.map(function (curEle) { return curEle.toString(); });
console.log(numberTostring);
var evenNumbers = numbers4.filter(function (curVal) {
    return curVal % 2 === 0;
});
console.log(evenNumbers);
