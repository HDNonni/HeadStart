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
    //changed
    //let image  = document.getElementById("zero");
    //using image obj from the DOM, assigning a handler to the onclick property
    //image.onclick = showAnswer
    //*to this to handle all the pics
    //getting images by tag name
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
        images[i] = setTimeout(showAnswer , 5000);
        
    }
}
//**getting target error and is timeOut correct?

//window.onload and onclick ar two event handlers that get called at different times
//and image variable is local to each function and needs to be defined in both to avoid globals

//when click handler called it is passed an event object that has info about the event
//in the handler we use the event object to determine thing about the event
function showAnswer(eventObj) {
    // let image = document.getElementById("zero");
    //change image by source property but can also get/setAttribute for image objects
    //image.src = "zero.jpg"
    //target event tells what element generated the event
    let image = eventObj.target;
    //use the id property of that objext to ge tthe name of the unblurred image 
    let name = image.id;
    name = name + ".jpg";
    //set src of image to that name
    image.src = name;

}
// function reBlur() {
//     for (let i = 0; i < images.length; i++) {
//         images[i].setTimeout(() => {

//         }, 5000); 
//     }
// }
// reBlur();