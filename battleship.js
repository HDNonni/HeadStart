
//hard code location positions for now
//math.random added to randomize ships position
let randomLoc = Math.floor(Math.random() * 5);
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
document.getElementById("button").addEventListener("click", function () {
    console.log("button clicked:")
})
//how to only let user choose each # once
function battleShip() {
    //create loop and get user guesses
    while (isSunk == false) {
        //use promt first to test 
        guess = prompt("Ready? Enter a number 0-6");
        //guess = document.getElementById("userGuess").value;
        //document.getElementById("whatGuessIs").innerHTML = guess;
        if (guess < 0 || guess > 6) {

            alert("Invalid number");

        } else {
            //add to guesses
            guesses++

        }
        if (guess == loc1 || guess == loc2 || guess == loc3) {
            //add one to the number of hits if hit loc1 0r 2 0r 3
            alert("Hit!");
            hits++

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else {
            alert("Miss!");
        }
        //if (guesses == guess) {
          //  alert("You already picked that number")
        //}
    }
    let stats = " You took " + guesses + " guesses to sink the battleship " +
        " which means your accuracy was " + (3 / guesses);
    alert(stats);
}
//battleShip();
