
//math.random added to randomize ships position
let randomLoc = Math.floor(Math.random() * 40);
let loc1 = randomLoc;
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;
//let guess;
//let hits = 0;
//let guesses = 0;
//let isSunk = false;

//click handler for "button"
document.getElementById("fireButton").addEventListener("click", function () {
    console.log("button clicked:")
    let userGuess = document.getElementById("userGuess").value
    console.log("UserGuess:" + userGuess);
    controller.processGuess(userGuess);
})

let model = {//maintains the state of the game and tests for hits and misses
    boardSize: 7,//size of board grid
    numShips: 3,//number of ships in the game
    shipLength: 3,//number of locations for each ship
    shipsSunk: 0,//how many ships sunk

    //temp hardcoded fot testing
    //the property ships is the array of ship objects
    ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] }
    ],
    //fire method to determine if a hit or miss has occurred
    //examine each ship to see if it occupies that location
    //if hit ,mark corresponding item in hits array,tell view, return true
    //if miss return false
    //if hit was it sunk?
    fire: function (guess) {
        //iterate through the array of ships looking at each one
        for (let i = 0; i < this.numShips; i++) {
            //once get a ship need to determine if guess matches any locations of the ship
            let ship = this.ships[i];
            //changed locations and index variable into 1 to avoid verbosity
            //so evaluates to ship object,that has locations propertythat is an array, that has a method indexOf()(chaining)
            let index = ship.locations.indexOf(guess);
            //access ships set of locations
            //let locations = ship.locations;
            //determine if the guess is in this ships location
            //use indexOf to search array for matching value and return its index otherwise returns -1
            //let index = locations.indexOf(guess);
            //so if index >= 0 user guess in array and have a hit  because if not match indexOf will return-1
            if (index >= 0) {
                //"We have a hit" and mark hit array at same index
                ship.hits[index] = "hit";
                view.displayHit(guess);//notify view of a hit
                view.displayMessage("HIT!");//have view display the message
                if (this.isSunk(ship)) {//once there is a hit or ship sunk
                    view.displayMessage("You Sank My Battleship!")//if this hit sank , let user know
                    this.shipsSunk++;//once ship sunk increase the number of ships that are sunk 
                }
                return true // because hit retun true
            }
        }
        view.displayMiss(guess);//or notify of a miss
        view.displayMessage("You Missed");//have view display that message
        return false//if a miss return false
    },//comma between properties and methods
    isSunk: function (ship) {//call method isSunk , checks every possible location for a hit
        for (let i = 0; i < this.shipLength; i++) {
            //from the hits array and mark at same index as locations
            if (ship.hits[i] !== "hit") {
                return false;//if no location then ship still floating
            }
        }
        return true;//otherwise ship sunk return true
    }
};
let view = {
    //displays message in the message area, takes one argument
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea")//.innerHTML = msg//set message area from the page
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {//take location of hit or miss as an argument
        //get cell by id and set it to class ship or miss to display
        //location created from row and colulmn ans matched as id of the grid container
        let cell = document.getElementById(location);
        //set the class of the element
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        //same as displayHit, get an element and set it to the class
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");

    }
};
//object array to hold locations and hits arrays pg 338

//test to make sure its working*
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("45");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("This is a Test!");

//model.fire("46");
//model.fire("23");
//model.fire("16");
function parseGuess(guess) {
    if (guess === null || guess.length !== 2) {
        //check to make sure length of guess is 2 characters
        alert("Oops,please enter a letter and a number")
    } else {

    }
}
//controller object to get guesses , process guesses and get it to the model
let controller = {
    guesses: 0,//keeps number of guesses

    processGuess: function (guess) { //process guesses and pass to the model
        //check that input is valid then
        //convert input to numbers ie guess = A3 converts to 03


        let valid = false;
        if (guess.length == 2) {
            let firstCharacter = guess[0].toUpperCase();
            let firstCharValid = false;
            if (firstCharacter == "A") {
                firstCharValid = true;
            } else if (firstCharacter == "B") {
                firstCharValid = true;
            } else if (firstCharacter == "C") {
                firstCharValid = true;
            } else if (firstCharacter == "D") {
                firstCharValid = true;
            } else if (firstCharacter == "E") {
                firstCharValid = true;
            } else if (firstCharacter == "F") {
                firstCharValid = true;
            } else if (firstCharacter == "G") {
                firstCharValid = true;
            }
            console.log("firstCharacter:" + firstCharacter);
            console.log("firstCharValid:" + firstCharValid);
            //number to convert the string guess to a number
            let secondChar = Number(guess[1]);
            let secCharValid = false;
            if (secondChar >= 0 && secondChar <= 6) {
                secCharValid = true;
                console.log("second Character:" + secondChar + " " + secCharValid);
            }
            if (firstCharValid == false) {
                console.log("Please enter a valid input " + firstCharacter);
            } else if (secCharValid == false) {
                console.log("Please enter a valid input " + secondChar);
            }
            if (firstCharValid == true && secCharValid == true) {
                valid = true;
            }
        }


    }
};
controller.processGuess("a0");



