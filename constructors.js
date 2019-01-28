//constructor car with 7 parameters

// function Car(make, model, year, color, passengers, convertible, mileage){
//rework code to utilize object literal line 31
function Car(params) {
    //each property set to the parameters name
    //while using obj literals the refernce to a parameter is changed to corresponding property 
    //reference pgs 530-548 
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;//just initialied to false

    //methods are slightly different than object literals 
    this.starts = function () {
        this.started = true;
    },
        this.stops = function () {
            this.started = false;
        }
    this.drives = function () {
        if (this.started) {
            console.log(this.make + " is started");
        } else {
            console.log("Start the " + this.make + "'s engine");
        }
    };
}
//using object literal as an argument to clean up the code
let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 123456
}
let cadis = new Car(cadiParams); //passing a single argument vs below
//then add a property
cadis.chrome = true;
//and delete a property , but the instanceof is still a Car
delete cadis.convertible;
let limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
}
let limos = new Car(limoParams);
let limeDog = new Dog("Rhapsody In Blue", "Poodle", 40);
console.log(limos.make + " " + limos.model + " is a " + typeof limos);
console.log(limeDog.name + " is a " + typeof limeDog);
//chevi and forb print undefined becasue not n an obj literal yet like cadi
let chevi = new Car("Chevy", "Monte Carlo", 1974, "maroon", 4, false, 120, 321, false);
let forb = new Car("Ford", "Mustang", 1970, "blue", 4, true, 80, 322, true);
let cars = [chevi, forb, cadis];
if (cadis instanceof Car) {
    console.log("This is a Car object instance");
} else {
    console.log("not Clear!")
}
//*** */eventhough the tru/false are different in each car w starts and convertible
//they both have identical outcomes
for (let i = 0; i < cars.length; i++) {
    cars[i].drives();
    cars[i].stops();
    cars[i].starts();
}

for (let i = 0; i < cars.length; i++) {
    let top = "hard";
    if (cars[i].convertible) {
        top = "convertible";
    }
    console.log("This " + cars[i].make + " " + cars[i].model + " has a " + top + " top.");
}
//an object is a Dog if it was created by a Dog constructor
//instanceof to find out what kind of constructor
function dogCatcher(obj) {
    return (obj instanceof Dog);

}
dogCatcher(Cat.meow)

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
let meow = new Cat("Meow", "Siamese", 10);
let whiskers = new Cat("Whiskers", "Mixed", 14)

let fooFoo = {
    name: "FooFoo",
    breed: "Mixed",
    weight: 38
}

//constructor functions
//constructor functions have a capital as a convention
function Dog(name, breed, weight) {
    //property and parameter names don't have to be the same but are by convention
    this.name = name;
    this.breed = breed;
    this.weight = weight
    //add method w/ anonymous function
    this.bark = function () {
        if (this.weight > 40) {
            console.log(this.name + " says Woof!")
        } else {
            console.log(this.name + " says Yip!");
        }
    };
}
//cut from line 1046 review.js to do exercise pg 542
//to create a new dog object we need the "new" keyword
let fido = new Dog("Fido", "Mixed", 38);
fido.owner = "Bob"
fido.trust = function (person) {
    return (person === "Bob")
}
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Husky", 100);
let dogs = [meow, whiskers, fooFoo, fido, fluffy, spot];
for (let i = 0; i < dogs.length; i++) {
    let size = "small";
    if (dogs[i].weight > 40) {
        size = "large"
    }
    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed)
    let noBite = fido.trust("Bob");
    console.log("Fido only trusts " + noBite)
}
for (let i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}

// for (let i = 0; i < dogs.length; i++) {
//     dogs[i].bark()
// }
// console.log();

let now = new Date();
console.log(now);

let birthday = new Date("January 30, 2014");
console.log(birthday + " is Penelope's Birthday!")

//create an array object
let emptyArray = new Array();
//can also add items to it
emptyArray[0] = 99;
//also create array objects that have a specific size
let oddNumbers = new Array(3);
//create an array of length 3 and fill with values after it is created
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
//reverse the order
oddNumbers.reverse();
//returns a string with - between
let aString = oddNumbers.join(" - ");
console.log(aString);

//every method takes a functuib abd tests each value of the array to see if the
//function returns true or falsewhen called on that value ;If the function returns true for
//all the array items, then the result of the'every' method is true
let areAllOdd = oddNumbers.every(function (x) {
    return ((x % 2) !== 0);
});
console.log(areAllOdd);

console.log(fido instanceof Dog) && (spot instanceof Dog);

//page 561
// var taxis = new CarPrototype();
// taxis.model = "Delorean Remake";
// taxis.color = "silver";
// taxis.currentTime = new Date();
// taxis.fluxCapacitor = { type: "Mr. Fusion" };
// And customize
// the prototype
// here
//taxi.timeTravel = function (date) {... };

//object prototype using dog constructor; create an instance of each dogs(name, breed, weight)
function Dogs(name, breed, weight) {
    //property and parameter names don't have to be the same but are by convention
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
//setting up the prototype
//assign the string "Canine to the prototype species property"
//use chaining in this case, start with Dogs, grab its prototype property,
//which is a reference to an object that has a species property
Dogs.prototype.species = "Canine";

//for each method assign the appropriate functionto the prototypes bark, run and wag properties

Dogs.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dogs.prototype.run = function () {
    console.log("Run!");
};
Dogs.prototype.wag = function () {
    console.log("Wag!")
};
Dogs.prototype.sit = function(){
    console.log(this.name + " is now sitting")
}
let fluffys = new Dogs("Fluffy", "Poodle", 30);
let spots = new Dogs("Spot", "Husky", 100);
let barnaby = new Dogs("Barnaby", "Basset Hound", 55);
//to update code for changes to a specific "Dogs"for example to change spots bark
spots.bark = function () {
    console.log(this.name + " says Yippee!")
};
// We first check to see if the
// barnaby object has a sit method
// and there isn't one. So we then
// check the prototype, find the sit
// method, and invoke it.
barnaby.sit();

fluffys.bark();
fluffys.wag();
fluffys.run();

spots.bark();
spots.wag();
spots.run();

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
//all three methods shared by both robots
Robot.prototype.maker = "Objects R Us";
Robot.prototype.speak = function () {
    console.log("english");
};
Robot.prototype.makeCoffee = function () {
    //what I didn't add
    console.log("Making coffee");

};
Robot.prototype.blinkLights = function () {
    if(this.onOffSwitch === true){
        console.log(this.name + " is running")
    }else { 
        console.log(("Please turn on " + this.name))
    }
//or simply console.log("blink blink");
};

let robby = new Robot("Robby", 1980, "Dr Morbius");
let rosie = new Robot("Rosie", 1990, "George Jetson");

let robots = (robby, rosie);

robby.onOffSwitch = false;
robby.makeCoffee = function(){
    console.log(this.name + " drinks Starbucks");
};


rosie.cleanHouse = function(){
    console.log(this.name + " Does a great job cleaning");
}


// Use this code to test your
// instances to make sure they
// are working properly and
// inheriting from the prototype.
console.log(robby.name + " was made by " + robby.maker +
    " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
    " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
