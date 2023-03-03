
// Functional Programming using data and functions

var currencyOne = 100;
var currencyTwo = 0;
var conversionRate = 1.2;

function currencyExchange(amount, rate)
{
    return amount * rate;
}

currencyTwo = currencyExchange(currencyOne, conversionRate);
console.log(currencyTwo);