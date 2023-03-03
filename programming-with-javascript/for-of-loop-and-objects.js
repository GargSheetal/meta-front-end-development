
// for of loop and objects example

const car = {
    engine: true,
    streering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log('Sports car object: ', sportsCar);

console.log('----- for in is unreliable -----')
for(prop in sportsCar)
{
    console.log(prop);
}
console.log('----- for in iterates over object and its prototype -----')

console.log('----- for of is unreliable -----')

for(prop of Object.keys(sportsCar))
{
    //console.log(prop, ' : ', sportsCar[prop])
    console.log(sportsCar[prop])
}
console.log('----- for of iterates over objects OWN PROPERTIES ONLY !! -----')