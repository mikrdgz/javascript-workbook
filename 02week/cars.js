// Project 1: Arrays of Cars
// Off of master create a new branch called 'ArrayOfCars'
// Create a new file called exercises.js in the /02week folder of your workbook.
// Inside the file complete each of the following exercises.

// length
// Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
// Console.log the length of the array.
// concat
// Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
// indexOf and lastIndexOf
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
// join
// Use the join method to covert the array totalCars into a string called stringOfCars.
// split
// Use the split method to convert stringOfCars back intro an array called totalCars.
// reverse
// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// sort
// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:
// alert(carsInReverse.indexOf('yourPrediction'));
// slice
// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// splice
// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
// push
// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
// pop
// Use the pop method to remove and console.log the last item in the array carsInReverse.
// shift
// Use the shift method to remove and console.log the first item in the array carsInReverse.
// unshift
// Use the unshift method to add a new type of car to the array carsInReverse.
// forEach

// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]


// 'use strict'; 

// let cars = [
//     "Ford",
//     "Suburu",
//     "Fiat",
//     "Toyota"

// ];

// let moreCars = [
//     "Jeep",
//     "Tesla",
//     "Porche",
//     "Honda"
// ];


// console.log(cars.length);

// let totalCars = cars.concat(moreCars);

// console.log(totalCars.indexOf(Honda));

// console.log(totalCars.lastIndexOf(Ford));

// let stringOfCars = totalCars.join();

// let totalCars = stringOfCars.split();

// let carsInReverse = totalCars.reverse();

// carsInReverse.sort();

// alert(carsInReverse.indexOf('Fiat'));

// let removedCars = [];
//  carsInReverse.slice(-1, 1).push(removedCars);

//  carsInReverse.splice(1,2,Ford,Honda);

//  carsInReverse.splice(1,2,Ford,Honda).push(carsInReverse);

// console.log(carsInReverse.pop());

// console.log(carsInReverse.shift());

// carsInReverse.unshift("Mercedes");

let items = [23, 45, 0, 2];

for (let i = 0; i < items.length; i++){
   console.log(items[i] + 2);
}


const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach ((i) => {
numbers = i + 2;
console.log(nums);
});




