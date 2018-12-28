//access the image and assign a click handler
// function unBlur() {
//     let blurImage = true;
//     document.getElementById("zero").addEventListener("click", function () {
//         if (blurImage == true) {
//             document.getElementById("zero").src = "zero.jpg";

//         } else if (blurImage == false) {
//             document.getElementById("zero").src = "zeroblur.jpg"
//         }
//     })
//     //blurImage = true;

// }
// unBlur();
//so that code doensn't run til page loaded
window.onload = init;
function init() {
    //changed to loop over images*
    //let image  = document.getElementById("zero");
    //using image obj from the DOM, assigning a handler to the onclick property
    //image.onclick = showAnswer
    //*to this to handle all the pics
    //getting images by tag name
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        //images[i].onclick = showAnswer;
        images[i].onmouseenter = showAnswer;
        //using onmouseleave to also hideAnswer rather than or in addition to timeOut
        
        images[i].onmouseleave = hideAnswer;  
    }
    //images.onmouseout = document.getElementsByTagName("img"); 
}
//to make images reblur using the name  +  "blur.jpg" to capture the original images and setting timeout
function hideAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}



//window.onload and onclick ar two event handlers that get called at different times
//and image variable is local to each function and needs to be defined in both to avoid globals

//when click handler called, it is passed an event object that has info about the event
//in the handler we use the event object to determine thing about the event
function showAnswer(eventObj) {
    // let image = document.getElementById("zero");
    //change image by source property but can also get/setAttribute for image objects
    //image.src = "zero.jpg"
    //target event tells what element generated the event
    let image = eventObj.target; //*? error
    //use the id property of that objext to ge tthe name of the unblurred image 
    let name = image.id;
    name = name + ".jpg";
    //set src of image to that name
    image.src = name;
    //call the reBlur function(book has set time out fx in showAnswer pg 412)
    reBlur();
}
//function loops thru the images by tagName , grabs the target on the eventObj , setTimeOut uses hideAnswer
//with the eventObj argument to hide the pic after 5 sec
function reBlur() {
    let images = document.getElementsByTagName("img");
     for (let i = 0; i < images.length; i++) {
        let eventObj = {
            target: images[i]
        };
        setTimeout(() => {
            hideAnswer(eventObj)
        },5000);
     }
 }
 