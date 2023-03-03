
//default parameters example 1

function withDefaultParameters(number = 10)
{
    console.log('Result: ', number * number);
}

// calling funstion withDefaultParameters
withDefaultParameters();

// creating a function with no default params
function noDefaultParameters(number)
{
    console.log('Result: ', number * number);
}

// calling the functon noDefaultParameters and providing no values in the paranthesis
noDefaultParameters();  // NaN (not a number)


// Example 2 

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

// creating an object of WithDefaultParams class
var better = new WithDefaultParams();
better.calculate(); // Result: 6