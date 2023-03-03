
// learning inheritance

// declaring an object with some properties

let bird = {
    canFly: true, 
    hasWings: true,
    hasFeathers: true
}

// creating an object of bird
let eagle1 = Object.create(bird);
console.log('Eagle1', eagle1);    // empty object {}

// eagle1 can access the properties of bird object
console.log('Eagle1 can fly: ',eagle1.canFly);
console.log('Eagle1 has wings: ',eagle1.hasWings);
console.log('Eagle1 has feathers: ',eagle1.hasFeathers);

// can create as many objects of the bird object
let eagle2 = Object.create(bird);
console.log('Eagle2 has feathers: ',eagle2.hasFeathers);

// creating an object of bird and overridig the parent properties
let penguin = Object.create(bird);

// overriding inherited property of canFly
penguin.canFly = false;
console.log('Penguin can fly: ',penguin.canFly);
console.log('Penguin has wings: ',penguin.hasWings);
console.log('Penguin has feathers: ',penguin.hasFeathers);

