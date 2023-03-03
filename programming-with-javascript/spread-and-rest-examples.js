
// Join arrays, objects using the rest operator

// Join arrays
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries];   // concatenate
console.log(fruitsAndBerries);   // outputs a single array - [ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]

// Join objects
const flying = {wings: 2};
const car = {wheels: 4};
const flyingCar = {...flying, ...car};
console.log(flyingCar);     // { wings: 2, wheels: 4 }


// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);   // [ 'onion', 'parsley', 'carrot', 'beetroot' ]


// Convert a string to an array using the spread operator
const greetings = 'Hello';
const arrayOfChars = [...greetings];
console.log(arrayOfChars);  // [ 'H', 'e', 'l', 'l', 'o' ]

// Copy an object into a separate one using the spread operator.
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}; // copying the properties of one object into another
// const car2 = car1; // this will create an another alias "car2" for the same object that is referred by "car1"
car1.speed = 201;

console.log(car1.speed, car2.speed);    // 201 200

// Copy an array into a separate one using the spread operator.
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, 'not', fruits2);   // [ 'apples' ] not [ 'apples', 'pears' ]






