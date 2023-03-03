// Strings can be iterable

var greeting = 'Howdy';

console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for(var i = 0; i < greeting.length; i++)
{
    console.log(greeting[i]);
}

// Strings are not arrays

var greet = 'hello';
var user = 'Lisa';

//console.log(greet.pop());     // this method will throw an error as its a method of arrays and is not applicable on Strings

console.log(greet + user);
console.log(greet.concat(user));