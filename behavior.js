//create a timer to alert the user in alotted seconds , written in milliseconds
setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
    console.log("wake")
    //alert("WakeUP!");
}
//wakeUpUser()
//head start page 7
//defining a price and discount to calculate if free shippping 
//commented out price to attempt input from html vs function parameter



/*
 1. create a function 
 2. create inputs for user
 3. write to html
*/
function checkDiscount() {
    console.log("check");
    //get price from input
    let price = document.getElementById("price").value;
    //get discouont from input
    let discount = document.getElementById("discount").value / 100;
    //calculate discount and assign to variable total use toFixed to fix to 2 decimals
    let total = (price - (price * discount)).toFixed(2);
    console.log("total:", total);
    //assign submit 


    if (total > 25.00) {
        document.getElementById("total").innerHTML = ("You get free shipping! Your total is $" + total);
        document.getElementById("total").style.cssText = "width:300px; border:1px solid green";
    } else {
        document.getElementById("total").innerHTML = ("Sorry no free shipping, Your total is $" + total)
        document.getElementById("total").style.cssText = "width:300px; border:1px solid red";
    }
}

let submit = document.getElementById("submit")
let clear = document.getElementById("clear")
// document.getElementById("total").innerHTML = submit
// console.log(submit)
//get submit and write to HTML depending on calculation outcome
submit.addEventListener("click", function () {
    checkDiscount();
})
clear.addEventListener("click", function () {
    let elements = document.querySelectorAll(".clear")
    console.log("elems:", elements)
    // .value = " ";
    for (let i = 0; i < elements.length; i++) {
        let clearFields = elements[i];
        clearFields.value = "";
    }
    let divElement = "";
    document.getElementById("total").innerHTML = ""
    document.getElementById("total").style.cssText = "display:none"
    console.log("Clear:", clear);
});




// let price = 28.99;
// let discount = 10;
// //i created the function
// function freeShipping() {
//     //define calculation for determining if free shipping
//     let total = price - (price * (discount / 100));
//     //if statement to check the total price (removed:and down to math floor
//     if (total > 25.00) {

//         console.log("Free Shipping " + total);
//         //attempted return, else, using parameter in function 
//         //return total
//         //console.log(freeShipping());
//         return true;
//     } else {

//         console.log("No free shipping " + total);
//         //     return total
//         return false;
//     }
// }

// let userHasFreeShipping = freeShipping(29.00,10)
// if (userHasFreeShipping) {
//     console.log(" User gets free ships")
// }
// console.log(document.getElementById("price").value);
// //call the function moved out of function added console.log and nothing

//variable named count assigned 10
var count = 10;
//as long as the variable count is greater that 0 
//juggle needs to be defined
//loop through AS LONG AS the count is <10
while (count > 0) {
    //juggle();
    //decrement the count by 1 each time through
    count = count - 1;
}
console.log(count);

//create an object that contains dog.name and dog.weight
var dog = {
    name: "Rover",
    weight: 35
}
//if weight is more than 30 than woof...
if (dog.weight > 30) {
    console.log("Woof Woof");
    //not >30 not greater
} else {
    console.log("not greater");
}
//20 is assigned to the variable circleRadius 
var circleRadius = 20;
//calculation for circle area is assigned to the variable
var circleArea = Math.PI * (circleRadius * circleRadius);
console.log(circleArea);

function convert(temp) {
    let CurrentTemp = (9 / 5) * temp + 32;

    console.log(CurrentTemp);
}
convert(10)

let scoops = 5;
console.log(scoops)
while (scoops > 0) {
    console.log("AnotherScoop!<br />");
    scoops = scoops - 1;
}
console.log("Life without ice cream isn't the same");

function cashInWallet(cash) {

    if (cash > 5) {
        console.log("Will take the Works!")
    } else {
        console.log("Can't eat today")
    }
}
cashInWallet(3);

function HowManyScoops(scoop) {
    if (scoop == 4) {
        console.log("I want more than " + scoop + " scoops!")
    } else if (scoop == 3) {
        console.log("Not enough scoops")
    } else if (scoop == 5) {
        console.log(scoop + " is enough sccops for now")
    }
}
HowManyScoops(5)

function bdSong() {
    let name = " Joe";
    let i = 0
    while (i < 2) {
        console.log("Happy Birthday to you");
        i++
    }
    console.log("Happy Birthday dear" + name);
    console.log("Happy Birthday to you");
}
bdSong();

function ninetyNine() {
    let word = "bottles"
    let count = 99;

    while (count > 0) {

        // console.log(count + " " + word + " of beer on the wall");
        // console.log(count + " " + word + " of beer");
        // console.log("Take one down and pass it around, ");

        count--
        if (count > 0) {
            document.getElementById("beerBottles").innerHTML = "Take one down and pass it around" + count + " " + word + " of beer on the wall.";
        } else {
            document.getElementById("noMore").innerHTML = "No more " + word + " of beer on the wall.";
        }
    }



}
ninetyNine();

let guess = 6;
let isValid = (guess >= 0 && guess <= 6);
console.log(isValid);

let kb = 1287;
let tooBig = (kb > 1000);
let urgent = true;
let sendFile = (urgent == true || tooBig == false);
console.log(sendFile); //true

let inStock = true;
let onSale = true;
let buyIt;
if (inStock || onSale) {
    console.log(buyIt);
}
function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " WOOF");
    } else { console.log(name + " woof") }
}
bark("rosy", 45);
bark("ace", 16);
bark("fido", "23");
bark("scottie", -1);
bark("dino", 0, 0);

function whatShallWeWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}
whatShallWeWear(45);
whatShallWeWear(67);
whatShallWeWear(79);

function doIt(param) {
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);


function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = " That's too Hot!"
    } else if (degrees < 100) {
        message = "That's too Cold!"
    } else {
        message = "That's just right!"
        //setMode("bake");
        //setTemp("degrees");
    }
    //returning the return statement as a result of this function
    return message;
}
//so when function above is returned, the string that is returned as a result 
//of the function will be assigned to the status variable (the last else statement)
//calls the function and assigns it to status
var status = bake(350);
console.log(status);



//Example below of TRACING the flow of execution
//third the argument(radius)is sent to the parameter and function begins eexecuting w/ r containing value 5.2
function calculateArea(r) {
    let area;
    //fourth body of function executes starting w/ declaring variable 'area'
    //then test if if parameter r has a value of <=0
    if (r <= 0) {
        // FIFTH return 0 and function stops executing if  r <= 0
        //but 5.2 passed in so it goes on to next block and does not execute
        return 0;
    } else {
        // SIXth else executed
        //SEVENth the circle area uses the r parameter and passes in 5.2 to compute the area
        area = Math.PI * r * r;
        //EIGHTth execution is stopped when the function returns the value and the value of area is returned
        return area;
    }
}

//FIRST declare radius variable and assign 5.2
let radius = 5.2;

//Second call calculateArae function and pass radius variable as an argument
//NINth that value is stored in the variable theArea
let theArea = calculateArea(radius);
//TENth execution continues on the next line
console.log("The area is: " + theArea);

//the thing a ma jig pg 110
//declare a function clunk
function clunk(times) {
    //declare local variable num to equal times parameter as an argument 
    var num = times;
    //loop through while num > 0, decrease num each time thru and display
    //clunk that many times it is passed
    while (num > 0) {
        //should only display clunk once but displayed 120???
        display("clunk");
        num--;
    }
}
//How many letter combinations ie 1 = 1; 2 = 2; 4letters in a word = 24 possiblities
//declare function and pass parameter size
function thingamajig(size) {
    //declare local variable facky and assign 1 to it
    var facky = 1;
    //no declaration so a global variable assigned 0
    clunkCounter = 0;
    if (size == 0) {
        //call display function w argument"clank" if size from thing... equal to 0
        // or is equal to 1 pass in "thunk"
        //neither should display since thing.. is passed in 5 below
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        //otherwise while the size is greater than 1 assign facky(1)*size
        //and decrement each time 
        //so size is 5 facky * size is 1* size?
        while (size > 1) {
            facky = facky * size;
            //iteration 1 = facky(1)*(size(passed in 5))then upates on next iteration
            //to facky (1) then decrement size to 4 and facky to 20 (5*4)
            //size to 3 etc... 
            size = size - 1;
        }
        //call clunk and pass in argument of facky
        clunk(facky);
    }

}
//declare display function w/ parameter output
function display(output) {
    //log output
    console.log(output);
    //increment clunkCounter
    clunkCounter++
}
//global variable clunkCounter assigned here
var clunkCounter = 0;
//call thing..function
thingamajig(2);
console.log(clunkCounter)



//global variable balance is SHADOWED by the parameter in the function
let balance = 10500;
let cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount
        console.log(balance);
    }
    console.log(cameraOn);
    return amount;
    //cameraOn still false because to change back to true must be before return statememt
    cameraOn = true;

}
let amount = steal(balance, 1250);
//logging amount here so shows waht the criminal thought he stole 
//but "balance" is original amount
console.log("criminal: you think you stole " + amount + " !");
console.log(balance);
//logs 1250 because logging the amount not the balance left in acct
//example of variable shadowing
var currencySymbol = "$";

function showMoney(amount) {
    var currencySymbol = "€";
    // document.write(currencySymbol + amount);
    var money = currencySymbol + amount
}
console.log(showMoney(100))


//scores that hold bubble factors
//display scores
let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54,];
//access index starting at 0
console.log(scores[0]);
//create a variable to capture scores index
let solution2 = scores[2];
console.log("solution 2 produced " + solution2 + " bubbles.");


//Bubble Report

//functions should do only ONE thing WELL! so this function should be 2
// added scores as a parameter instead of using the global variable
function bubbleReportHighScore(scores) {
    //variable to hold the results (both variables moved inside function)
    //add a varaible that holds the high score and set to zero
    let highScore = 0;
    let output;
    //scores is using the parameter in the function instead of the array variable
    for (let i = 0; i < scores.length; i++) {
        //solution is the index # in the array
        //create a string to output results
        output = "Bubble solution # " + i + " score: " + scores[i];
        console.log(output);
        //if to determine high score
        if (scores[i] > highScore) {
            highScore = scores[i]
        }
    }
    //outside the for loop and if statement / return function added
    //to return the highscore to the code that called the function 
    return highScore;
}
//call the function and pass in scores array
highScore = bubbleReportHighScore(scores);
//*CONTINUE HERE!-used book again
//iterate again to find the highest score
//and be aware of where code is placed for accurate results
//2 parameters added 
function bestResult(scores, highScore) {
    //variable to hold bubble solutions with highest score
    let highestScore = []

    for (let i = 0; i < scores.length; i++) {
        //each time thru compare score with highscore, IF equal addd to highestscore 
        if (scores[i] == highScore) {
            highestScore.push(i);
        }
        //my try
        /*if (highestScore == scores) {
            highestScore.push(scores[j]);
            allScores = highestScore + highScore
        }*/
    }
    return highestScore;

}
let highestScoresSoFar = bestResult(scores, highScore);

//costs array mirrors scores array (parallel array)
let costs = [.25, .27, .23, .25, .25, .25, .33, .31, .25, .29];
//whenever you are managing indices of multiple arrays things can get tricky.
//Let’s do that; in the long run I’m sure it will be faster to plan it first.
function bestCost() {
    //what to compare to
    let lowestCostSeenSoFar = 100;
    //what index represents the lowest cost to keep track of the index to match high score with low cost
    let indexWithTheLowestCost;
    //get the highest score again
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (costs[i] < lowestCostSeenSoFar) {
                indexWithTheLowestCost = i;
                //assigned to be costs[i]
                //value of lowestCostSeenSoFar is set to the cost of the bubble solution
                lowestCostSeenSoFar = costs[i]
            }
        }
    }
    return indexWithTheLowestCost;

}
//WORK ON COST FUNCTION , completed with Anthony's help make sure you understand!!
let bestCostIndex = bestCost();
scores[bestCostIndex];
console.log("Most cost effective Bubbles are: " + bestCostIndex);
//needed to add .length to scores..THINK!!!!!
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with the highest scores: # " + highestScoresSoFar);


//favorite icr cream flavors
let flavors = ["Butter Pecan", "Strawberry", " Maine Blueberry", "Mississippi Mud"];
console.log("my favorite ice cream is " + flavors[0])
//or assign a favorite
let favFlavor = flavors[1];
//to change a value in an array
flavors[3] = "Mint Chocolate Chip";
console.log(flavors[3])
console.log(flavors.length)
//find the last one entered
let last = flavors.length - 1;
console.log(last);
let recent = flavors[last];
console.log("last one added to array is " + recent)
function makePhrases() {
    let words1 = ["this", "that", "other", "thing"];
    let words2 = ["then", "now", "never", "sometimes"];
    let words3 = ["yes", "no", "maybe", "okay"];

    let ran1 = Math.floor(Math.random() * words1.length);
    let ran2 = Math.floor(Math.random() * words2.length);
    let ran3 = Math.floor(Math.random() * words3.length);

    let phrase = words1[ran1] + " " + words2[ran2] + " " + words3[ran3];
    console.log(phrase);
}
makePhrases();
makePhrases();
makePhrases();
makePhrases();

function bubbleGum() {
    let products = ["choo choo chocolate", "icy mint", "cake batter", "bubblegum"];
    let hasBubbleGum = [false, false, false, true];
    //let i = 0;
    //while (i < hasBubbleGum.length){
    //while loop reworked to make a 'for' loop
    for (let i = 0; i < hasBubbleGum.length; i++) {
        if (hasBubbleGum[i]) {

            console.log(products[i] + " contains Bubble Gum");

        }
        //i++
    }
}
bubbleGum();


