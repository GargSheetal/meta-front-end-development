
// Add two numbers function

function addTwoNums(a, b)
{
    try{
        if(typeof(a) !== 'number')
        {
            throw new ReferenceError('the first argument is not a number')
        }
        else if (typeof(b) !== 'number')
        {
            throw new ReferenceError('the second argument is not a number')
        }
        else 
        {
            console.log(a + b); 
            return a + b;
        }  
    } catch (err)
    {
        console.log('Error!', err);
    }   
}


// calling addTwoNums function with a number and string
addTwoNums(5, "5");   
console.log('It still works !!');

// Export the addTwoNums function as a module
module.exports = addTwoNums;
