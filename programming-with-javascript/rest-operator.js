
/* The rest operator allows you to take items from an array and use them to create a separate sub-array.
	The rest operator is used to build a smaller box, and pack items into it.
	The rest operator, therefore, gives us what is left over of the source array, as a separate sub array
	The rest operator is also useful in functions too, but the rest parameter, 
    must be the last parameter in the function definition.  */


    const top7 = ['The Colosseum', 
                  'The Roman Forum', 
                  'The Vatican', 
                  'Trevi Fountain', 
                  'The Pantheon', 
                  'Piazza venezia', 
                  'The Palatine Hill'];

    // rest operator and de-structuring
    const [] = top7;

    // extracting the contents of top7 array in four variables
    // ...secondVisit is a subarray of rest of the items in the top7 array
    const [first, second, third, ...secondVisit] = top7;    // creating variables for the first 3 items in the array and storing rest of the array in the variable ...secondVisit


    // example of rest operator in functions using map method of arrays
    // map method
    /* This method is used to map each array item over to another array's item, 
    based on whatever work is performed inside the function that is passed-in to the map as a parameter. */

    function addTaxToPrices(taxRate, ...itemsBought)
    {
        return itemsBought.map(item => taxRate * item);
    }

    let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
    console.log(shoppingCart);      // [ 50.6, 97.9, 38.5, 86.9 ]