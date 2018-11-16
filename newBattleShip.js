//math.random added to randomize ships position
let randomLoc = Math.floor(Math.random() * 40);
let loc1 = randomLoc;
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

//click handler for "button"
document.getElementById("fireButton").addEventListener("click", function () {
    console.log("button clicked:")
})

let view = {
    //displays message in the message area, takes one argument
    displayMessage:function(msg){
        document.getElementById("messageArea").innerHTML = msg
    },
    displayHit:function(location){
        //get cell by id and set it to class ship or miss to display
        let cell = document.getElementById(location);
        //set the class of the element
        cell.setAttribute("class","hit");
    },
    displayMiss:function(location){
        //same as displayHit, get an element and set it to the class
        let cell = document.getElementById(location)
        cell.setAttribute("class", "miss");

    }
}

//object array to hold locations and hits arrays pg 338

//test to make sure its working
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("45");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("This is a Test!");

let model = {
    boardSize: 7,//size of board grid
    numShips: 3,//number of ships in the game
    shipLength: 3,//number of locations for each ship
    shipsSunk: 0,//how many ships sunk

    //temp hardcoded fot testing
    //the property ships is the array of ship objects
    ships: [{locations:["06", "16", "26"], hits:["", "", ""] },
            {locations:["24", "34", "44"], hits:["", "", ""] },
            {locations:["10", "11", "12"], hits:["", "", ""] }],
//fire method to determine if a hit or miss has occurred
    //examine each ship to see if it occupies that location
    //if hit ,mark corresponding item in hits array,tell view, return true
    //if miss return false
    //if hit was it sunk?
    fire: function(guess) {
        //iterate through the array of ships looking at each one
        for(let i = 0; i < this.numShips; i++){
            //once get a ship need to determine if guess matches any locations of the ship
            let ship = this.ships[i];
            //access ships set of locations
            locations = ship.locations;
            //determin if the guess is in this ships location
            
        }
    }
};



