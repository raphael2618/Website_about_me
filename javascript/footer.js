window.addEventListener('load', () => {
    let pages = [ "HTML","CSS","Javascript" ];
    let temp = "";
    for(let i = 0; i < pages.length; i++) {
        var last = i === (pages.length - 1);
        temp += (last ? "and " : "") + pages[i] + (last ? "" : ", ");
    }
    document.getElementById("printarray").innerHTML += temp;
}, false)