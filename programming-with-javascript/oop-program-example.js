
// OOP example with super and sub classes

class Animal{
    constructor(color = 'yellow', energy = 100)
    {
        this.color = color;
        this.energy = energy;
    }
    isActive()
    {
        if(this.energy > 0)
        {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at: ', this.energy);
        }
        else if(this.energy  === 0)
        {
            this.sleep();
        }
    }
    sleep()
    {
        this.sleep += 20;
        console.log('Energy is increasing, currently at: ', this.energy);
    }
    getColor()
    {
        console.log(this.color);
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimpTrees = true, color, energy)
    {
        super(color, energy)
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimpTrees = canClimpTrees;
    }
    makeSound()
    {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

// Creating onjects of the classes
var polly = new Parrot(true);  // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!


console.log(polly.color);   // yellow
console.log(polly.energy);  // 100

polly.isActive();   // Energy is decreasing, currently at:  80

var penguin = new Bird('shriek', false, 'black and white', 200);  // setting all the custom properties
console.log(penguin);   // Bird {color: 'black and white', energy: 200,sound: 'shriek',canFly: false}

console.log(penguin.sound); // 'shriek'
console.log(penguin.canFly); // false
console.log(penguin.color); // 'black and white'
console.log(penguin.energy); // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

// creating an object of HouseCat
var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

// creating an object of Tiger
var cuddles = new Tiger();

cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!




