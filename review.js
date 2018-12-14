//auto o matic function / playing with Math.random for more practice
function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadi", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];
    //gets the random values from the arrays to randomly combine the values
    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    //random # for passengers , adding 1 so at least 1 person in the car
    let rand5 = Math.floor(Math.random() * 5) + 1;
    //choose whether convertible or not
    let rand6 = Math.floor(Math.random() * 2);
    //car object to pick values for the properties from the arrays using the random number
    //additionally adds pass, convert and miles
    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    }//return the new 'car' object
    return car;
}
//function to display car to html use'car' to reference car object
//call makeCar and assign the value it returns to carToSell
//then pass the car object returned from makeCar to the function displayCar
function displayCar(car) {
    document.getElementById("addText").innerHTML = "Your new car is a " + car.year + " " + car.make + " " + car.model
}
//function calls
let carToSell = makeCar();
displayCar(carToSell);

//adding a function directly to an object
//assign a function definition to a property
let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    //name of function is the name of the property
    drive: function () {
        console.log("Zoom- Zoom");
        //functions inside objects are called methods
    }
};

//to call drive 'method' use dot notation with object name and property(mthod name) 
//and parenthesis
fiat.drive();

//adding behavior to methods
let honda = {
    make: "honda",
    model: "accord",
    year: 1975,
    color: "red",
    passengers: 4,
    convertible: false,
    mileage: 18000,
    //property to hold the current state
    started: false,
    //method to start the car
    start: function () {
        //in the function method , reference to the object needs to be made hence this
        this.started = true;
    },
    //method to stop the car
    stop: function () {
        this.started = false;
    },
    //name of function is the name of the property
    //with conditional check to see if car started
    driven: function () {
        if (this.started) {
            console.log("Zoom- Zoom");
            //functions inside objects are called methods
        } else {
            console.log("You need to start the engine")
        }
    }
};
let chevy = {
    make: "Chevy",
    model: "Impala",
    year: 1966,
    color: "green",
    passengers: 4,
    convertible: false,
    mileage: 58000,
    //property to hold the current state
    started: false,
    //method to start the car
    start: function () {
        //in the function method , reference to the object needs to be made hence this
        this.started = true;
    },
    //method to stop the car
    stop: function () {
        this.started = false;
    },
    //name of function is the name of the property
    //with conditional check to see if car started
    driven: function () {
        if (this.started) {
            console.log("Chevy goes Zoom- Zoom");
            //functions inside objects are called methods
        } else {
            console.log("You need to start the chevy engine")
        }
    }
};
let taxi = {
    make: "taxi",
    model: "car",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: true,
    mileage: 78000,
    //property to hold the current state
    started: false,
    //method to start the car
    start: function () {
        //in the function method , reference to the object needs to be made hence this
        this.started = true;
    },
    //method to stop the car
    stop: function () {
        this.started = false;
    },
    //name of function is the name of the property
    //with conditional check to see if car started
    driven: function () {
        if (this.started) {
            console.log("Taxi goes Zoom- Zoom");
            //functions inside objects are called methods
        } else {
            //shouldn't this log if call stop method also?
            console.log("You need to start the taxi engine")
        }
    }
};
honda.driven();
//honda.start();
//honda.driven();
honda.stop();
//chevy.start();
//chevy.driven();
chevy.stop();
//taxi.start();
//taxi.driven();
taxi.stop();

//find the errors

let song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing "
                //could use this.name and this.artist
                + song.name + " by " + song.artist);
        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
        }
    }
};
song.play();
song.pause();

//this keyword practice pg205

//**what does this code do exactly
//create object eightball with index and advice array
//2 functions in the object if index is greater than advice length
//then index = 0
let eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function () {
        return this.advice[this.index];
    }
};
eightBall.shake();//returns undefined
console.log(eightBall.look());//only returns no
eightBall.shake();//returns undefined
console.log(eightBall.look());

//using the for in to iterate through object properties
for (let prop in honda) {
    //logs the entire object including comments
    console.log(prop + ": " + honda[prop]);
}
//can use bracket or dot notation to access properties
//when using brackets the property name is enclose in quotes
console.log("Honda mileage is: " + honda["mileage"]);
//also can be an expression ie honda["mile"+"age"]

//how behavior affects state 210
//addFuel to the cars objects, new car object for more practice added

let ford = {
    make: "Ford",
    model: "Traverse",
    year: 1999,
    color: "green",
    passsengers: 6,
    convertible: false,
    mileage: 11000,
    started: false,
    //new property fuel added
    fuel: 0,
    start: function () {
        this.started = true;
        //***book added else staement as well ,is it neccessay?
        if (this.fuel == 0) {
            console.log("You are on empty, fill up before starting!")
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            //check to be sure that there is fuel b4 we drive
            if (this.fuel > 0) {
                console.log(this.make + " " + this.model + " goes zoom zoom!");
                //reduce amount of fuel each time drive called
                this.fuel = this.fuel - 1
            } else {
                //if no fuel left then message
                console.log("You are out of fuel!")
                this.stop();
            }
        } else {
            console.log("The engine needs to start first");
        }
    },
    //addFuel function method added with parameter amount
    addFuel: function (amount) {
        //need this. because fuel is an object propertyu, amount is a parameter so this not needed
        this.fuel = this.fuel + amount
    }
}
ford.drive();
ford.start();
ford.drive();
ford.addFuel(2);
ford.drive();
ford.start();
ford.drive();
ford.stop();
ford.drive();
ford.start();
ford.drive();
ford.drive();
ford.start();
ford.addFuel(1)
ford.start();
ford.drive()
ford.stop();
ford.start();

//manipulating the dom chapter 6
//access the DOM by document.getElementById
//let planet = document.getElementById("greenPlanet").innerHTML= "This is the green planet"
//or
//not able to get the init function to work ? because external script file? and script tag in body?
function init() {//use this for rendering the doc before js (this is for when js in head mostly)
    let planet = document.getElementById("greenPlanet");//= "This is the green planet"
    planet.innerHTML = "Red Alert: hit by inner html!";
    //let planet = document.getElementById("greenPlanet").innerHTML= "This is the green planet";
    //console.log(planet);
    planet.setAttribute("class", "redText");
    //}
    //call init no parenthesis on the window object so doc renders b4 js
    //window.onload = init;
    addSongs();
    function addSongs() {
        let song1 = document.getElementById("song1");
        let song2 = document.getElementById("song2");
        let song3 = document.getElementById("song3");

        song1.innerHTML = "Blue Suede Strings, By Elvis Pagely";
        song2.innerHTML = "Great Objects on Fire, By Jerry JSON Lewis";
        song3.innerHTML = "I code the line, By Johnny JavaScript";
    }
    // can only use one on a page for -> window.onload = addSongs;
    //addSongs();
    //how to make init call all functions inside it /tried -failed addSongs call put inside init
}
window.onload = init;
//window.onload = addSongs();

let thing = "Some old string";
let examine = typeof thing;
console.log(examine);
let test1 = "abcdef";
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { "abcdef": 123 };
let test8 = ["abcdef", 123];
let test10 = null;
let test11 = 0 / 0;
function test9() {
    return "abcdef";
}
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10)
console.log(typeof test11);

let b = "food" * 1000;
console.log(b);

if (99 == "99") {
    console.log("A number = a string");
} else {
    console.log("No way a number == a string");
}
console.log(3 + "4");
console.log(3 * "4");
console.log(Infinity - "1");

//need to work through this function on board
function findCarInLot(car) {
    for (let i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}
let chev1 = {
    make: "Chevy",
    model: "Bel Air"
};
let taxi1 = {
    make: "Webville Motors",
    model: "Taxi"
};
let fiat1 = {
    make: "Fiat",
    model: "500"
};
let fiat2 = {
    make: "Fiat",
    model: "500"
};
let lot = [chevy, taxi, fiat1, fiat2];
let loc1 = findCarInLot(fiat2);
console.log(loc1);


function lieDetectorTest() {
    var lies = 0;
    //any object is truthy even empty ones
    var stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }
    var car = {
        //did not steal car because null falsey
        keysInPocket: null
    };
    if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }
    if (car.emptyGasTank) {
        //emptyGasTank undefined so falsey
        console.log("You drove the car after you stole it!");
        lies++;
    }
    //empty array truthy
    var foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }
    //array item at 0 is undefined so falsey
    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }
    //non empty string is truthy even if oonly has 1 space!
    var yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
//calling a method on a string 
var presentableText = text.toLowerCase();
//string with a property (.length)
if (presentableText.length > 0) {
    console.log(presentableText);
}

//page 301 - 303 for manipulating strings
function validatePhone(phoneNumber) {
    if (phoneNumber.split !== 3) {
        if (phoneNumber.charAt !== '-') {
            if (phoneNumber.split !== 4) {
                return false
            } else {
                return true;
            }
        }
    }
}
//this is mine/ returns false so its incorrect
console.log(validatePhone(123-2456))
//2 other methods that work!
/**
 * function validate(phoneNumber) {
 * us the length property to see how many characters it has
 * page 303 for changes
    if (phoneNumber.length !== 8) || phoneNumber.length < 7(added to check with or without dash) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            uses charAt to examnine each character of the string
            if (phoneNumber.charAt(i) !== '-') {
                return false;
    }
    makes sure there is a number where there is supposed to be
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
    }

    second method
function validate(phoneNumber) {
     if (phoneNumber.length !== 8) {
        return false;
    }
    this uses substring to create 3 character
    var first = phoneNumber.substring(0,3);
    again at index 4 
    var second = phoneNumber.substring(4);
    tests in one conditional statement for charAt and for 'numbers' 
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}
 */
function validate(phoneNumber) {
    if (phoneNumber.length > 8 ||
        phoneNumber.length < 7) {
        return false;
    }
    var first = phoneNumber.substring = (0, 3);
    var second = phoneNumber.substring = (3) //(phoneNumber.length - 4);
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    //returning the result of evaluating the conditional which will be true or false
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
    return true;
}
console.log(validate(123-4567));

//what does all this mean?
function duck(sound) {
    this.sound = sound;
    this.quack = function() {
        console.log(this.sound);
    }
}
//create a new duck and assign it to the toy variable
let toy = new duck("quack quack");
toy.quack();
console.log(typeof toy);//returns object
console.log(toy instanceof duck);//returns true

function train(whistle){
    this.whistle = whistle;
    this.choo  = function(){
        console.log(this.whistle);
    }
}
let toyTrain = new train ("choo choo");
toyTrain.choo();
console.log(typeof toyTrain);
console.log(toyTrain instanceof train);

let inputButton = document.getElementById("inputButton").addEventListener("click", function(){
    console.log("Button Clicked");
    let inputForm = document.getElementById("inputForm").value;
    console.log("InputForm: " + inputForm);
})
//handler(callback) events
function pageLoadEvent(){
    console.log("I'm Loaded")
}
//assign the name of the handler to windows onload property to callthe function
window.onload = pageLoadEvent;