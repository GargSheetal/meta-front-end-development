
// Object Methods.......

var car = {};
car.mileage = 34526;
car.color = 'red';
car.turnTheKey = function(){
    console.log('Engine is running')
}

car.lightsOn = function(){
    console.log('Lights are on')
}

console.log(car);
car.turnTheKey();
car.lightsOn();