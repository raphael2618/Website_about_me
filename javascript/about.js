//  manage the next / prev button according the map display 
var active = 0;
function next() {
    if (active < 3) { //must switch to the next
        if (active == 0) //first map : make the prev button enable
            document.getElementById("prev-button").style.display = "inline";
        document.getElementById("map-" + active).style.display = "none"; //disable
        active++; //switch to the next
        document.getElementById("map-" + active).style.display = "inline"; //enable
        if (active == 3) //last map : disable the next button
            document.getElementById("next-button").style.display = "none";
    }
}
function prev() {
    if (active > 0) { //must switch to the prev
        if (active == 3) //last map : make the prev button enable
            document.getElementById("next-button").style.display = "inline";
        document.getElementById("map-" + active).style.display = "none"; //disable
        active--; //must switch to the next
        document.getElementById("map-" + active).style.display = "inline"; //enable
        if (active == 0) //first map : make the prev button disable
            document.getElementById("prev-button").style.display = "none";
    }
}

window.addEventListener('load', () => {
    document.getElementById("prev-button").style.display = "none";
}, false)
