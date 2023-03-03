
// Car class example

class Car {
    // constructor to assign values to future object properties
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    // function inside a class doesn't require the function keyword
    turboOn()
    {
        console.log('turno is on !!')
    }
}

// Car object
const Car1 = new Car('red', 120)  

// Car1 can access the methods of the class Car
Car1.turboOn();