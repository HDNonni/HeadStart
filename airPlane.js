//goals
//* meet certain conditins in the passenger list before the flight takes off
//* ie be sure no passengers on no fly list
//*make sure all passengers paid
//*all who is on flight

//passing functions to functions
//and returning functions from functions
var passengers = [
    { name: "Jane Doloop", paid: true, noFly: false, ticket: "coach" },
    { name: "Dr. Evel", paid: true, noFly: true, ticket: "firstClass" },
    { name: "Sue Property", paid: false, noFly: false, ticket: "premium" },
    { name: "John Funcall", paid: true, noFly: false, ticket: "firstClass" },
    { name: "Mickey Mouse", paid: false, noFly: false, ticket: "coach" },
    { name: "Bugs Bunny", paid: true, noFly: false, ticket: "firstClass" }
]


function passengersOnFLight() {
    let htmlString =
        `<tr>
            <th>Passenger</th>
            <th>Paid</th>
            <th>No-Fly</th>
            <th>Can-Fly</th>
         </tr>`;
    for (let i = 0; i < passengers.length; i++) {
        console.log(i)
        let currentPassenger = passengers[i];
        let canFly = checkNoFlyList(currentPassenger.name);
        console.log(currentPassenger);
        let trStyle = "canFly"
        if (canFly == false) {
            trStyle = "cannotFly"
        }
        //${variable interpolation}
        let passengerInfo = `
                <tr class = "12${trStyle}">
                    <td>${currentPassenger.name}</td>
                    <td>${currentPassenger.paid}</td>
                    <td>${currentPassenger.noFly}</td>
                    <td>${canFly}</td>
                </tr>
            `;
        htmlString = htmlString + passengerInfo;
        // let passengerList = document.getElementById("passengerList");
        // passengerList.innerHTML = "<td>" + passengers[i].name + "</td>"
        // console.log("passengerList[]")
        // $("allPassengers").append("<td>" + passengers[i].name + "</td>");
    }
    document.getElementById("passengerTable").innerHTML = htmlString;

    for (let i = 0; i < passengers.length; i++) {
        let currentPassenger = passengers[i];
        let canFly = checkNoFlyList(currentPassenger.name);
        if (canFly == true) {
            document.getElementsByTagName("tr")[i + 1].style.backgroundColor = "green";
        } else {
            document.getElementsByTagName("tr")[i + 1].style.backgroundColor = "red";
        }
    }
}
passengersOnFLight();

/**
 * 
 * @param {*} passengerName 
 * @returns true - means that the passenger can fly
 *          false - that means they can not fly
 * 
 */
function checkNoFlyList(passengerName) {
    //check if passengerName is in the passenger List
    for (let i = 0; i < passengers.length; i++) {
        let currentPassenger = passengers[i];
        if (passengerName == currentPassenger.name) {
            console.log(passengerName);
            console.log(currentPassenger.noFly);
            if (currentPassenger.paid == false) {
                return false;
            }

            if (currentPassenger.noFly) {
                return false
            } else {
                return true
            }
        }
    }
    return false
}


//     let noFlyList = passengers.noFly;
//     for (let i = 0; i < passengers.length; i++) {
//         if (noFlyList == true) {
//             return false
//         }
//     }
//     return true
// }
console.log(checkNoFlyList("Dr. Evel"));

//from the book
//2 params first array of passengers and then one to look for some condition in the passenger
//**why here is it explained that the argument is the same as the array pg446 */
function processPassengers(passengers, testFunction) {
    //iterate thru the passengers
    for (let i = 0; i < passengers.length; i++) {
        //call the function on each passenger
        if (testFunction(passengers[i])) {
            //if result is true, meaning they failed the test either not paid
            //or on the no fly list return false so plane doesnt takeoff 
            return false
        }
    }
    //if all passengers passed the test return true
    return true
}

//in this argument is 1 passenger (an object)not array of passengers(array of Objects)
//check if on noFly list return true if on noFly list
//false if NOT on noFly list
function checkNoFlyLists(passenger) {
    return (passenger.name === "Dr. Evel");
}
//check if paid, return true if NOT paid
function checkNotPaid(passenger) {
    return (!passenger.paid);
}
//passing a function to a function, use the name of the function as the argument
//if any passengers on the no-fly , get back false and message will be in the console
let allCanFly = processPassengers(passengers, checkNoFlyLists);
if (!allCanFly) {
    console.log("The plane can't take off we have a passenger on the no-fly list");
}
//check if all passengers have paid
let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    //get the  message if they have not
    console.log("The plane can't take off; not everyone has paid");
}

/**print to console whether or not passenger paid and pass function to processPassenger 
 * to test it pg448
 * looked at answer
 */

function printPassengers(passenger) {
    let message = passenger.name;
    if (passenger.paid == true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    //return not necessary 
    return false;
}
processPassengers(passengers, printPassengers);



//returning function from function
//iterate over the passengers in the array and call serveCustomer on ea passenger
function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomers(passengers[i])
    }
}
//call servePassenger
servePassengers(passengers);

//serve customer is various tasks a flight attndeant does
function serveCustomers(passenger) {
    //get drink order
    //its passed the passenger that was passed into serveCustomer
    //store the returned function in a drink order variable
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    //use the function whenever we need to get a drink order for the passenger
    getDrinkOrderFunction();
    //get dinner order
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDinnerOrderFunction();
    //pick up trash 
}

//drink order function to make it easier to update later
//call createDrinkOrder to get back a function get...Order that knows how to aska passenger
//for an order and the function being returned corresponds to the passenger ticket type 
function createDrinkOrder(passenger) {
    //create a variable to hold the  function we want to return
    let orderFunction;
    if (passenger.ticket === "firstClass") {
        orderFunction = function () {
            console.log("Would you like wine or beer?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            console.log("Would you like cola or water?")
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log("Would you like cola, wine or water?")
        };
    }
    //return the function
    return orderFunction;
}

function createDinnerOrder(passenger) {
    let dinnerFunction;
    if (passenger.ticket === "firstClass") {
        dinnerFunction = function () {
            console.log("Would you like lobster or prime rib?");
        };
    } else if (passenger.ticket === "coach") {
        dinnerFunction = function () {
            console.log("Would you like a sandwich or a salad?")
        };
    } else if (passenger.ticket === "premium") {
        dinnerFunction = function () {
            console.log("Would you like a cheese plate, sandwich or a salad?")
        };
    }

    return dinnerFunction
}



