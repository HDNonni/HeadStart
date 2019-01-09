//products array
let products = [
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

//implementing sort method
//compare the sold property of each object
//* each comparision not working as expected , they end up as the last one coded?
function compareSold(product1, product2) {
    if (product1.sold > product2.sold) {
        return 1;
    } else if (product1.sold === product2.sold) {
        return 0;
    } else {
        return -1;
    }
}
//call products array sort method 
products.sort(compareSold);
//revisit
//document.getElementById("sold").innerHTML = products.sort(compareSold);
console.log("sorted by sold:");
console.log([...products])

function compareCalories(product1, product2) {
    if (product1.calories > product2.calories) {
        return 1;
    } else if (product1.calories === product2.calories) {
        return 0;
    } else {
        return -1;
    }
}
products.sort(compareCalories);
//**why does 44 work and not 43 in the console? */
console.log("sorted by calories: ", [products]);
console.log([...products]);


function compareName(product1, product2) {
    if (product1.name < product2.name) {
        return -1;
    } else if (product1.name > product2.name) {
        return 1;
    } else if (product1.name === product2.name) {
        return 0;
    }
}
products.sort(compareName);
console.log("--SORTED BY NAME--")
console.log("sorted by name: ", products);

printProducts(products)
console.log("--END SORTED BY NAME--")

// function compareColor(){
//     products.color(function(a,b){
//         return a-b
//     })
//     console.log(products)
// }
// products.sort(compareColor)


// function printProducts(products) {
//     for (let i = 0; i < products.length; i++) {
//     }
//     console.log("Name: " + products[i].name +
//         "Calories: " + products[i].calories +
//         "Color: " + products[i].color +
//         "Sold: " + products[i].sold);
// }


// function printProducts(products) {
//     for (let i = 0; i < products.length; i++) {
//         document.getElementById("name").innerHTML = "Soda Name: " + products[i].name + products[i].calories;
//         console.log("Name: " + products[i].name +
//             "Calories: " + products[i].calories +
//             "Color: " + products[i].color +
//             "Sold: " + products[i].sold);
//     }
// }
// //*shows sorted by calories in console for 1st list
// printProducts(products);

function typesOfSoda() {
    let htmlString =
        `<tr>
        <th>Name</th>
        <th>Calories</th>
        <th>Color</th>
        <th>Sold</th>
    </tr>`;
    for (let i = 0; i < products.length; i++) {
        let currentSoda = products[i];
        console.log("Current Soda: " + currentSoda);

        let productInfo =
            `<tr>
        <td>${currentSoda.name}</td>
        <td>${currentSoda.calories}</td>
        <td>${currentSoda.color}</td>
        <td>${currentSoda.sold}</td>
    </tr>`;
        htmlString = htmlString + productInfo;
    }
    document.getElementById("sodaTable").innerHTML = htmlString;

}
typesOfSoda();

//make for loop to print all sodas 
function printProducts() {
    let htmlString =
        `<div>Name</div>
    <div>Calories</div>
    <div>Color</div>
    <div>Sold</div>`
    let sodaList = ""
    for (let i = 0; i < products.length; i++) {
        sodaList = products[i]
        let productList = `<div>${sodaList.name}</div>
                       <div>${sodaList.calories}</div>
                       <div>${sodaList.color}</div>
                       <div>${sodaList.sold}</div>`;
        htmlString = htmlString + productList;
    }
    document.getElementById("name").innerHTML = htmlString;
    console.log(sodaList);
}

printProducts();
//*shows sorted by calories in console for 1st list
// printProducts(products);



//*books code works as expected , what is different? I changed mine to mimic theirs leaving out the last else if; FIXED
function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}
function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}
function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}
products.sort(compareName);
console.log("Products sorted by name:");
printProducts(products);
products.sort(compareCalories);
console.log("Products sorted by calories:");
printProducts(products);
products.sort(compareColor);
console.log("Products sorted by color:");
printProducts(products);