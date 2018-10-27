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

var song = {
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
for(let prop in  honda){
    //logs the entire object including comments
    console.log(prop + ": " + honda[prop]);
}
//can use bracket or dot notation to access properties
//when using brackets the property name is enclose in quotes
console.log("Honda mileage is: "+ honda["mileage"]);
//also can be an expression ie honda["mile"+"age"]