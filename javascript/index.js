//  fetch the avatar and name from the github page and display it
window.addEventListener('load', () => {
    (async() => {
        const response = await fetch('https://api.github.com/users/raphael2618');
        const json = await response.json();
        document.getElementById("username").innerHTML = json.name;
        document.getElementById("profileImage").src = json.avatar_url;
    })();
}, false)
