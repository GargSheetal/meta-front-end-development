
// const keyword

// 1. The const variable must be INITIALIZED
// console.log(user);  // Error: Missing initializer in const declaration
// const user;

// 2. We CAN'T access the const variable before initialization
//console.log(user);  // Error: ReferenceError: Cannot access 'user' before initialization
// const user = 'Andrew';

// // 3. We CAN'T declare a const variable again
// user = 'Anna';
// console.log(user);  // Error: TypeError: Assignment to constant variable.


var localVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);