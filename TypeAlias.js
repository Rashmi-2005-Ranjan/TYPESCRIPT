var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
var product2 = {
    name: "Book",
    price: 100,
    quantity: 5
};
var product3 = {
    name: "Bag",
    price: 800,
    quantity: 20
};
var calculateTotalPrice = function (producttype) {
    return producttype.price * producttype.quantity;
};
console.log("The Price Of The Product is : ", calculateTotalPrice(product1));
console.log("The Price Of The Product is : ", calculateTotalPrice(product2));
console.log("The Price Of The Product is : ", calculateTotalPrice(product3));
