
// nested for loops examples

// print the table of 1 and 2 ............

for(var i = 1; i <= 2; i++)
{
    for(var j = 1; j <= 10 ; j++)
    {
        console.log(i, ' times ', j, ' = ', i*j);
    }
}


// print a custom division table ..............

for(var i = 100; i > 10; i -= 10)
{
    for(var j = 10; j > 4; j -= 5)
    {
        console.log(i, ' / ', j, ' = ', i/j)
    }
}


// Printing styled alphabets 
// try running the following code in the browser console in order to have the styles applied

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}