
// functionality of var keyword

// 1. We cannot access a var keyword before initialication
    // 1.1 .... as long as the var variable is EVENTUALLY INITIALIZED
    // 1.2 .... ANYWHERE in your code

    console.log(user);  // Error : user is not defined 
                        // undefined (if it is declared anywhere in the code)

// 2. We can declare and re-declare the var variable without errors
    var user = 'Mary';
    var user = 'Lisa';
    var user = 'Mark';

    console.log(user);  // Prints the last assigned value of user - Mark

   // var user;
