var Person1 = ['Aditya', 28, true];
var Person2 = ['Karan', 29, true];
// const Person3:Personinfo=[19,'Mangal',true]  -->Provide Error
var displayPersonInfo = function (info) {
    var name = info[0], age = info[1], haslicence = info[2];
    console.log("Name : ".concat(name, "\nAge : ").concat(age, "\nHas Driving Licence : ").concat(haslicence ? "Yes" : "No"));
};
displayPersonInfo(Person1);
console.log();
displayPersonInfo(Person2);
console.log();
var Product1 = ["Buscuit", 10, 100];
var Product2 = ["Cake", 20, 200];
var ProductInfo = function (Product) {
    var Productname = Product[0], Price = Product[1], Availability = Product[2];
    console.log("Product Name : ".concat(Productname, "\nPrice : ").concat(Price, "\nAvailability : ").concat(Availability));
};
ProductInfo(Product1);
console.log();
ProductInfo(Product2);
