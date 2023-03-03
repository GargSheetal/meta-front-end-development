
// push() method adds items into array

var fruits = [];
fruits.push('apple');
fruits.push('pear');

console.log(fruits);

// pop() method remove the last item from the array

fruits.pop();
console.log(fruits);

// function that takes all its arguments and pushes them into an array

function arrayBuilder(one, two, three)
{
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);

    return arr;
}

// calling function arrayBuilder and store it in a variable
var fruitsArr = arrayBuilder('apple', 'pear', 'orange');
console.log(fruitsArr);

