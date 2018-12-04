let model = {//maintains the state of the game and tests for hits and misses
    boardSize: 7,//size of board grid
    numShips: 3,//number of ships in the game
    shipLength: 3,//number of locations for each ship
    shipsSunk: 0,//how many ships sunk

    //temp hardcoded for testing
    //the property ships is the array of ship objects

    // { locations: ["06", "16", "26"], hits: ["", "", ""] },
    // { locations: ["24", "34", "44"], hits: ["", "", ""] },
    // { locations: ["10", "11", "12"], hits: ["", "", ""] },
    ships: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] }
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
            //so evaluates to ship object,that has locations property that is an array, that has a method indexOf()(chaining)
            let index = ship.locations.indexOf(guess);
            //access ships set of locations
            //let locations = ship.locations;
            //determine if the guess is in this ships location
            //use indexOf to search array for matching value and return its index otherwise returns -1
            //let index = locations.indexOf(guess);
            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!")
                return true;
                //so if index >= 0 user guess in array and have a hit  because if not match indexOf will return-1
            } else if (index >= 0) {
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
    },
    //three methods to handle ships placment on the board
    generateShipLocations: function () {
        //iterates and creates ships til enough ships and fills  array
        let locations
        //each ship to generate locations for
        for (let i = 0; i < this.numShips; i++) {
            do {
                //generate new set of locations
                locations = this.generateShip();
                //check for overlaps if there are con't to generate until no collisions
                //so do generate, while there are collisions
            } while (this.collision(locations));
            //assign locations that work to the ships location property in the model.ship array
            this.ships[i].locations = locations;
        }
    },
    //create an array with random locations
    generateShip: function () {
        //randomly pick a ships directin if 1 then horizontal 0 is vertical
        //generate # betwn 0 and 2 exclusive
        let direction = Math.floor(Math.random() * 2);
        let row, col;
        //if direction 1 create a horizontal ship
        if (direction === 1) {
            //generate start for horizontal ship
            //random # 0-4 for col so start loc leaves room for rest of ship (current ship length is 3)
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            //generate start for veritcal ship
            //same for row so start point of ship leaves rm for rest of ship
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }
        //start with empty array and add locations one by one
        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                //add location to array for new horizontal ship
                //col+i in parens to make sure col added b4 converted to a string
                //push new location into array
                //first time through the loop i is 0 so its the starting column
                newShipLocations.push(row + "" + (col + i));
            } else {
                //add location to array for new vertical ship
                //increasing row instead of colum each time through loop b4 converts to string
                newShipLocations.push((row + i) + "" + col);
            }
        }
        //return the array once the locations are generated to calling method , generateShipLocations
        return newShipLocations;
    },
    //takes a ship and checks to see if any of the locatins overlap
    collision: function (locations) {
        //2 loops outer to iterate over all the ships in the model.ship property
        //inner iterates over all the new ships in locations array
        for (let i = 0; i < this.numships; i++) {//each ship on the board
            let ship = model.ships[i];
            for (let j = 0; j < locations.length; j++) {//check the locations in the array
                if (ship.locations.indexOf(locations[j] >= 0)) {
                    //if index >= to 0 then an existing ship location and collison found
                    return true
                }
            }
        }
        //haven't returned no matches found for locations being checked, no collision
        return false;
    },


};
//model.fire("46");
//model.fire("23");
//model.fire("16");

function init() {
    //reference to the fire button using html id
    let fireButton = document.getElementById("fireButton");
    //click event to handle function
    //add click handler function
    fireButton.onclick = handleFireButton;
    //to handle keypress
    let userGuess = document.getElementById("userGuess");
    //add new handler
    userGuess.onkeypress = handleKeyPress;
    //click handler for "button" my way
    /* document.getElementById("fireButton").addEventListener("click", function () {
         console.log("button clicked:")
         let userGuess = document.getElementById("userGuess").value
         console.log("UserGuess:" + userGuess);
         //pass player guess to controller
     })*/
    //call generateShipLocations in init so it happens when the game is loaded so all ships have locations ready to go
    model.generateShipLocations();//to fill in empty ship arrays
}
//run init when page is fully loaded
//wait til browser loaded to run init
window.onload = init;
//browser passes an event object to the handler
function handleKeyPress(e) {
    let fireButton = document.getElementById("fireButton");
    //fire button will act like it was clicked when enter/return is presses
    if (e.keyCode === 13) {
        fireButton.click();
        //false so form doesn't try to do anything else
        return false
    }
}
//call this function when the fire button is clicked
function handleFireButton() {
    //reference form input id
    let guessInput = document.getElementById("userGuess");
    //get the value form the form element
    let guess = userGuess.value;
    //pass players guess to the controller
    controller.processGuess(guess);
    //resets the form element input
    userGuess.value = "";
}


let view = {
    //displays message in the message area, takes one argument
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea")//.innerHTML = msg//set message area from the page
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {//take location of hit or miss as an argument
        //get cell by id and set it to class ship or miss to display
        //location created from row and colulmn and matched as id of the grid container
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


function parseGuess(guess) {
    //array with poss user guess
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        //check to make sure length of guess is 2 characters
        //console.log("Oops,please enter a letter and a number")
        view.displayMessage("Oops, please enter a letter and a number")
    } else {
        //get 1st character
        //commented and changed to add guess.charAt diectly to row
        //let firstChar = guess.charAt(0);
        //console.log("first Character: " + firstChar)
        //indexOf to get back a number 0-6
        let row = alphabet.indexOf(guess.charAt(0));
        console.log("row check:" + row);
        //second char in string
        let column = guess.charAt(1);
        console.log("column check: " + column)
        //if NAN
        if (isNaN(row) || isNaN(column)) {
            view.displayMessage("Oops, that isn't on the board!");
            //then checks for #'s betw 0 & 6, relying on type to conversiom to convert to a number for comparison 
            //rely on boardsize so that the size of board can be changed rather than hard coding the number 6
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardsize) {
            //console.log("Oops, that's off the board!");
            view.displayMessage("Oops, that's off the board");
        } else {
            //row is a # and column a string so type conversion willl change both to a string
            return row + column;
        }
    }
    return null //if get to here a check failed
}

//controller object to get guesses , process guesses and get it to the model
let controller = {
    guesses: 0,//keeps number of guesses

    processGuess: function (guess) { //process guesses and pass to the model
        //check that input is valid then
        //convert input to numbers ie guess = A3 converts to 03
        //use parse guess to validate players guess
        let location = parseGuess(guess);
        if (location) {
            //if valid guess increment guess by 1
            this.guesses++;
            //pass row and column to fire method and returns true if ship is hit
            let hit = model.fire(location);
            //if guess = hit and ships sunk

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my Battleships, in " + this.guesses + " guesses");
            }

        }
        console.log(messageArea);
    }
};

//TODO
//assess if shipsSunk object is working
// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");





