
//hard code location positions for now
//math.random added to randomize ships position
let randomLoc = Math.floor(Math.random() * 40);
let loc1 = randomLoc;
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

/*attempted keyevent to trigger enter key withour success, poss revisit
document.getElementById("userGuess").onkeypress = function keyFunction(event){
    var key = event.key || event.keyCode;
    if (key ==13){
        console.log("enter pressed")
        //battleShip()
    }
} this was added to input also - onkeypress = "keyFunction(event)"
*/
//click handler for "button"
document.getElementById("fireButton").addEventListener("click", function () {
    console.log("button clicked:")
})
//trying second attempt
/** 
//how to only let user choose each # once
function battleShip() {
    //create loop and get user guesses
    //while (isSunk == false) {
        //use promt first to test 
        //guess = prompt("Ready? Enter a number 0-6");
        //guess = document.getElementById("userGuess").value;
        //document.getElementById("whatGuessIs").innerHTML = guess;
        if (guess < 0 || guess > 6) {

            console.log("Invalid number");

        } else {
            //add to guesses
            guesses++

        }
        if (guess == loc1 || guess == loc2 || guess == loc3) {
            //add one to the number of hits if hit loc1 0r 2 0r 3
            console.log("Hit!");
            hits++

            if (hits == 3) {
                isSunk = true;
                console.log("You sank my battleship!")
            }
        } else {
            console.log("Miss!");
        }
        //if (guesses == guess) {
        //  alert("You already picked that number")
        //}
   // }
    let stats = " You took " + guesses + " guesses to sink the battleship " +
        " which means your accuracy was " + (3 / guesses);
    console.log(stats);
}
//battleShip();
*/

//for controller object written by mme , continued with book to implement parse guess
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
        alert("Please enter a valid input " + firstCharacter);
    } else if (secCharValid == false) {
        console.log("Please enter a valid input " + secondChar);
    }
    if (firstCharValid == true && secCharValid == true) {
        valid = true;
    }
}


}