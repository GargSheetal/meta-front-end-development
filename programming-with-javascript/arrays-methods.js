
// Array built-in methods
// forEach() method

// example 1
const fruits = ['kiwi','mango','apple','pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);    // 0. kiwi 1. mango 2. apple 3. pear

// example 2
// the function that the forEach() method needs to use is passed in directly into the method call
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


// filter() method
// it filters your arrays based on a specific test. Those array items that pass the test are returned.

const nums = [0,10,20,30,40,50];
nums.filter( function (num) {
   return num > 20;   
});


// map method
/* This method is used to map each array item over to another array's item, 
based on whatever work is performed inside the function that is passed-in to the map as a parameter. */

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
// output: [0,1,2,3,4,5]