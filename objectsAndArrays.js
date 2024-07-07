let customer = {};

let car = { 
    make: "Toyota",
    model: "corona",
    year: 2022,
    color: "silver",
    start: function() {
        console.log("The car has started");
    }
};

console.log(car);
console.log(car.make);

let carMake = "Toyota";
car.start();

// Inbuilt objects
// Math object
const PI = Math.PI;
console.log(PI);
console.log(Math.round(PI));

let cosine = Math.cos(60 * Math.PI / 180)
console.log(cosine)
