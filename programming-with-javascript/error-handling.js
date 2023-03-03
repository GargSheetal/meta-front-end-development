
// Error handling exapmples........
// Using try catch block 

try{
    console.log(a + b);
} catch (err)
{
    console.log(err);
    console.log('This is reference error')
    console.log('The code inside catch block is running')
}
console.log('Program was not stopped');


// throw keyword to throw error explicitly
try{
    throw new ReferenceError
} catch (err)
{
    console.log(err);
    console.log('This is reference error')
    console.log('The code inside catch block is running')
}
console.log('Program was not stopped');
