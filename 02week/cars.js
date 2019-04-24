let moreCars = [
    "Ford",
    "Suburu",
    "Fiat",
    "Toyota"

]

let cars = [
    "Jeep",
    "Tesla",
    "Porche",
    "Honda"
]

//console.log(cars.length);
// console.log(moreCars.indexOf("Honda"));
// console.log(cars.lastIndexOf("Ford"))


totalCars = [];

let totalCars = cars.concat(moreCars);
   console.log(totalCars);


let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
// let stringOfCars = totalCars.join();

// function reverseCars () {
// let carsInReverse = totalCars.reverse();
// console.log(carsInReverse);
// }

alert(carsInReverse.indexOf('1'));

