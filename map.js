
window.onload = init;
function init(){
    let map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(event){
    //screenx,y is a window object returns coordinates relative to the screen
    //client returns coords of current window
    
    let x = event.offsetX
    let y = event.offsetY
    console.log("coords: " + x  + " "+ y)
    let map = document.getElementById("coords");
    map.innerHTML = "Map Coordinates: " + x + ", " + y;

    

}