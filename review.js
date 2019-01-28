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
    let lies = 0;
    //any object is truthy even empty ones
    let stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }
    let car = {
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
    let foundYouAtTheCrimeScene = [];
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
    let yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}
let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}

let text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
//calling a method on a string 
let presentableText = text.toLowerCase();
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
console.log(validatePhone(123 - 2456))
//2 other methods that work!
/**
 * function validate(phoneNumber) {
 * us the length property to see how many characters it has
 * page 303 for changes
    if (phoneNumber.length !== 8) || phoneNumber.length < 7(added to check with or without dash) {
        return false;
    }
    for (let i = 0; i < phoneNumber.length; i++) {
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
    let first = phoneNumber.substring(0,3);
    again at index 4 
    let second = phoneNumber.substring(4);
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
    let first = phoneNumber.substring = (0, 3);
    let second = phoneNumber.substring = (3) //(phoneNumber.length - 4);
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    //returning the result of evaluating the conditional which will be true or false
    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
    return true;
}
console.log(validate(123 - 4567));

//what does all this mean?
function duck(sound) {
    this.sound = sound;
    this.quack = function () {
        console.log(this.sound);
    }
}
//create a new duck and assign it to the toy letiable
let toy = new duck("quack quack");
toy.quack();
console.log(typeof toy);//returns object
console.log(toy instanceof duck);//returns true

function train(whistle) {
    this.whistle = whistle;
    this.choo = function () {
        console.log(this.whistle);
    }
}
let toyTrain = new train("choo choo");
toyTrain.choo();
console.log(typeof toyTrain);
console.log(toyTrain instanceof train);

let inputButton = document.getElementById("inputButton").addEventListener("click", function () {
    console.log("Button Clicked");
    let inputForm = document.getElementById("inputForm").value;
    console.log("InputForm: " + inputForm);
})
//handler(callback) events
function pageLoadEvent() {
    console.log("I'm Loaded")
}
//assign the name of the handler to windows onload property to callthe function
window.onload = pageLoadEvent;

//setTimeout

function timeOutHandler() {
    console.log("Time Out event for 5 seconds")
}
setTimeout(timeOutHandler, 5000);

//using onresize for another event which prints to the html as the page is resized
function resize() {
    let element = document.getElementById("display");
    element.innerHTML = element.innerHTML + " that tickles!";
}
window.onresize = resize;

let addOne = function (x) {
    return x + 1;
};
let six = addOne(5);
console.log(six);

let migrating = true;

//function expression

let fly = function (num) {
    //added function declaration inside fly function expression
    let sound = "Flying";
    function wingFlapper() {
        console.log(sound);
    } for (let i = 0; i < num; i++) {
        //calling wingFlapper in the for loop?
        wingFlapper();
        //console.log("Flying")
    }
};
//function declaration (quack  is a reference to the function)
function quack(num) {
    let sound = "Quack";
    //added a functin expression
    let quaker = function () {
        console.log(sound);
    }
    for (let i = 0; i < num; i++) {
        quaker();
        console.log("Quacking")
    }
};
//if this part of the code was before the fly function expression then 
//it would not evaluate to fly because of the position of the function expression
if (migrating) {
    quack(4);
    fly(5);
}

// let winner = function () { alert("WINNER!") };
// let loser = function () { alert("LOSER!") };
// //  test 
// winner();
// //  assign to other letiables for practice
// let a = winner;
// let d = loser;
// let c = loser;
// a();
// d();


//define a function that thakes a function as an argument and calls that function
function sayIt(translator) {
    let phrase = translator("Hello");
    alert(phrase);
}
function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Aloha";
}
//passing the function hawaiianTranslator to the function sayIt
//sayIt(hawaiianTranslator);

let addOnes = function (x) {
    return x + 1
}
let sixes = addOnes(5);
document.write(sixes);

//function fun with param of echo
function fun(echo) {
    //prints hello boo and reference to the function
    console.log(echo);
};
//invoke fun function w/ argument "hello" that will print in console
fun("hello");

//new function, param aFunction ?being assigned "boo"?
// coming from 1st console log ,echo but prints refernce to function
function boo(aFunction) {
    aFunction("boo");
}
//boo function calling fun function
boo(fun);
//should print hello but prints the referenc to the function fun
console.log(fun);
//fun function calling boo 
fun(boo);
//assign moreFun to fun
let moreFun = fun;
//so should print "hello Again" coming from 1st console log ,echo
moreFun("hello Again");

//new function that returns the fun function
function echoMaker() {
    return fun;
}
//assigning bigFun to echoMaker that returns fun function that should print "hello Again"
let bigFun = echoMaker();
//incvoke bigFun with string and if print to console echo function should print "is there an echo?"
// coming from 1st console log ,echo but prints as expected
bigFun("Is there an echo?")
//prints reference to the original echo function because it returns the reference to 'fun'
console.log(bigFun);

function addN(n) {
    let adder = function (x) {
        return n + x;
    };
    return adder;
}
//    This function takes one argument n. It
//    then creates a function that also takes one
//    argument, x, and adds n and x together.
//    That function is returned.
//always adds 2 to the number
let add2 = addN(2);
console.log(add2(10));
console.log(add2(100));

//sort method for arrays/ put numbers in ascending order

let numbersArray = [60, 50, 62, 58, 54, 54]

function compareTwoNumbers(num1, num2) {
    if (num1 >= 50 && num2 < 65) {
        console.log(num1, num2);
    } else {
        console.log(false)
    }

}
compareTwoNumbers(50, 66)

//sort method to put numbers in ascending order
function compareNumbers(num1, num2) {
    //return 1 if 1st# >2nd or something greater than 0
    if (num1 > num2) {
        return 1;
        //return 0 if equal
    } else if (num1 === num2) {
        return 0;
        //less than 0 if 1st < 2nd
    } else {
        return -1
    }
}
console.log(compareNumbers(84, 74))

//?loop to shorten code
/**
 * for( let i = 0 ; i < numbersArray.length; i++){
 * }
 *  or sort
 * When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.


 */
function useSortToCompare() {
    numbersArray.sort(function (a, b) {
        return a - b;
    })
    console.log(numbersArray)
}
useSortToCompare();
//or pass the array to the fucntion by calling sort method
numbersArray.sort(compareNumbers);
//works both ways as expected
//sort method is destructive in that it changes the array rather than returning a new array that is sorted
console.log(numbersArray);


// make this function(compareNumbers) a single line
//of code by simply returning the result of
//substracting num2 from num1.
//however does not work as expected like compareNumbers does
function compareNumbersAgain(num1, num2) {
    return num1 - num2
}
console.log(compareNumbersAgain(34, 74))

//list numbers in descending order
function compareNumbersDesc(num1, num2) {
    if (num2 > num1) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}
numbersArray.sort(compareNumbersDesc);
console.log(numbersArray)

window.onload = init;
let cookies = {
    instructions: "Preheat oven to 350...",
    bake: function (time) { //anon
        console.log("Baking the cookies.");
        setTimeout(done, time);
    }
};
//function init() {
let button = function () {
    document.getElementById("bake");
    button.onclick = handleButton;
}
//function handleButton() {
console.log("Time to bake the cookies.");
let temp = function (temp) {
    cookies.bake(2500);
}
function done() {
    console.log("Cookies are ready, take them out to cool.");
    console.log("Cooling the cookies.");
    let cool = function () {
        console.log("Cookies are cool, time to eat!");
    };
    setTimeout(cool, 1000);
}
done()
//reworked to make simpler and adding anon function
// window.onload = function () {
//     let button = document.getElementById("bake");
//     button.onclick = function () {
//         console.log("Time to bake the cookies.");
//         cookies.bake(2500);
//     };
// };

// let cookies = {
//     instructions: "Preheat oven to 350...",
//     bake: function (time) {
//         console.log("Baking the cookies.");
//         setTimeout(done, time);
//     }
// };
function done() {
    //alert("Cookies are ready, take them out to cool.");
    console.log("Cooling the cookies.");
    let cool = function () {
        //alert("Cookies are cool, time to eat!");
    };
    setTimeout(cool, 1000);
}
// reworked the code to create two anonymous
// function expressions, one for the init function,
// and one for the handleButton function.Now we assign a function expression
// to the window.onload property...
//...and assign a function
// expression to the button.
// onclick property.

//pass the cool function directly to setTimeOut
setTimeout(function () {
    //alert("Cookies are cool, time to eat!");
}, 1000);

//decreasign verbosity
//reg func about cookies being down
function cookieAlarm() {
    console.log("Cookie Alarm Function 1")
}
//passing the function as an arguement to setTimeOut 
setTimeout(cookieAlarm, 1000);

//using a function expression (anonymous function)
//syntax is tricky , pay close attn to bracket placment and commas
setTimeout(function () {
    console.log("Cookie Alarm Function 2");
}, 2000);

//rewriting to anon functions

function vaccine(dosage) {
    if (dosage > 0) {
        let inject = (dosage);
    }
    console.log(dosage);
}
//administer(patient,vaccine, time); from the book pg 482 , alot not defined in this function
vaccine(10);

//rewrite  to anonymous function expression (watch syntax)
//? how to define all this to make it work
// administer(patient, function(dosage){
//     if(dosage > 10){
//         inject(dosage);
//     }
// }, time)

let secret = "007";
function getSecret() {
    //secret here is a free varaivle in getValue
    let secret = "008";

    function getValue() {
        return secret;
    }
    //getValue is not returnes from getSecrest so we never see the closure outside the context in whis it was created
    return getValue();
}
console.log(getSecret());

let secrets = "007";
function getSecrets() {
    let secrets = "008";
    //here a closure is created and returned from getSecret, so when we invoke getValueFun (getVlaue)
    //in a diff context(global scope)we use the value of secret in the environment
    function getValues() {
        return secrets;
    }
    return getValues;
}
let getValueFun = getSecrets();
//invoked in the global environ to use global variable , secret
console.log(getValueFun());

//lexical scope

let justAVar = "Global Variable";
//this function defines a new lexical scope that now has a local variable 
//justAVar that shadows the global variable with the same name
function whereAreYou() {
    let justAVar = "Now Local";
    //add a nested function that refers to justAVar, closest enclosing fucntion
    function inner() {
        return justAVar;
    }
    //invoke inner and returns local variable
    //return inner();
    //but what happens when inner returned rather than invoked
    return inner;
    //return justAVar;
}
//*and returns the local variable because we use lexical scope and go to the nearest function scope
//*let result = whereAreYou();
//*console.log(result)
//call whereAreYou and get back a reference to inner function and assign it to a variable innerFunction
let innerFunction = whereAreYou();
//invoke innerFunction , capture its output anin result and display the result
let result = innerFunction();
console.log(result);//still local

//using closure to implement a counter
// with global variable
let count = 0;

function counter() {
    count += 1;
    return count;
}

console.log(counter());
//with closure


function foo() {
    console.log("foo");
}

function makeCounter() {
    //now local variable because in function
    let count = 0;
    //increment the count variable in the counter function and return
    function counter() {
        count += 1;
        return count;
    }
    //then return the counter function which is the closure that holds 
    //count in its environment

    // return counter
    return foo;
}
//call makeCounter that creates a counter function and returns it along with an 
//environment containing the free variable count (creates a closure)
//when makeCounter called we get back a closure, a function with an environment
let doCount = makeCounter();
//doCount executes the body of the counter function which is a refernce to counter
console.log(doCount());
console.log(makeCounter()())

function makePassword(password) {

    //function that is returned from makePassword is a "closure" with 
    //an envrionment containing the "free variable" password
    return function guessPassword(passwordGuess) {
        //using a named function expression,guessPassword,as a way to refer to the name of the inner 
        //function, but invoke the returned function using tryGuess and not guessPassword
        return (passwordGuess === password)
    };
}
//pass in value "secret" to makePassword, this is the value thats storedin the "closure's " environ
let tryGuess = makePassword("secret");
//when invoked, tryGuess value for password is compared in the environment for tryGuess 
console.log("Guess is nope: " + tryGuess("nope"));

function multN(n) {
    //function that is returned from multN is a closure with an environ containing a free variable
    return function multN(x) {
        return n * x
    };
}
//invoke multN(6) and get back a functiion that multiplies and number by 6
let multBy6 = multN(6)
console.log("Multiply by 6: " + multBy6(6));
console.log("Multiply by 6: " + multBy6(9));

//modify makeCounter with no arguments but defines a count varaible
//then creates and returns an object with one method, increment
//this method increments the count variable and returns it

function makeAnotherCounter() {
    var count = 0;
    //returning an object with increment method
    return {
        increment: function () {
            //increment method has a free variable ,count so , increment is a closure with an 
            //environment containing the variable count
            count++;
            return count;

        }
    };
}
//call the function and get back an object with a method,* a closure
var counter = makeAnotherCounter()
//the method references the varaible count in its environment
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());


// the function we’re passing into setTimeout is a closure because it
// comes along with an environment that binds the free variable, doneMessage, to the
// string “Cookies are done!”. 
function makeTimer(doneMessage, n) {
    setTimeout(function () {
        console.log(doneMessage);
    }, n);
}
makeTimer("Cookies are done!", 1000);

function setTimer(doneMessage, n) {
    //closure created here
    setTimeout(function () {
        console.log(doneMessage);
    }, n);
    //changing the value of doneMessage after we call setTimeout (after closure envrion)
    doneMessage = "OUCH!";
}
setTimer("Cookies are done!", 1000);

window.onload = function () {
    //all variables local to onload

    let count = 0;
    let message = " You Clicked Me ";
    let div = document.getElementById("message");

    let button = document.getElementById("clickme");
    //set click handler as a function expression assigned to the button onclick
    //property, so we can reference  div message and count in the function(lexical scoping)

    //the function expression has 3 free variables :div, message and count, so a closure is created for the clickhandler function
    //what gets assigned to the buttons onclick property is a closure
    button.onclick = function () {
        count++;
        div.innerHTML = message + count + " Times!"
    };
};

// (function (food) {
//     if (food === "cookies") {
//         alert("More please");
//     } else if (food === "cake") {
//         alert("Yum yum");
//     }
// })("cake");



//exercise
function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
    //add method to constructor
    this.sound = function () {
        if (this.canFly === false) {
            console.log(this.type + " speaks human");
        } else {
            console.log(this.type + " quacks to communicate");
        }
    };
}
let donald = new Duck("Donald", false);
let daisy = new Duck("Daisy", false);
let newComber = new Duck("NewComber", true);
let ducks = [donald, daisy, newComber];

for (let i = 0; i < ducks.length; i++) {
    //let kind = "water";
    if (ducks[i].canFly == false) {
        console.log(ducks[i].type + " likes to stay on land")
    }
    else {
        console.log(ducks[i].type + " likes to swim")
    }
    for (let i = 0; i < ducks.length; i++) {
        ducks[i].sound()
    }
}

//exercise pg 531
//create coffee drinks
//method that returns a string "You've ordered blah blah"

function Coffee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces
    //need method that returns a string depending on the size;
    //getsize looks at ounces prop and returns size 
    this.getSize = function(){
        //this will be the object of the method thats called
        if(this.ounces === 8){
            return "small";
        }else if (this.ounces === 12){
            return "medium";
        }else if(this.ounces === 16){
            return 'large';
        }
    };
    //returns a string descrip of object, uses getsize method to ge tthe size
    this.getString = function(){
        return "Thank you for your order of a " + this.getSize() + " " + this.roast + " coffee.";
    }

}
//create a coffee object using the new keyword
let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.getString());
    /*let roast = "";
    let small = new Coffee(roast, 8);
    let medium = new Coffee(roast, 12);
    let large = new Coffee(roast, 16);*/


    
