const body = document.getElementsByTagName("body")[0];
const darkSwitch = document.getElementById("dark-switch");

// Chargement des couleurs
let colors;
function fetchColors() {
    fetch("colors.json")
    .then((response) => response.json())
    .then((json) => colors = json);
}
fetchColors();

function displayColor(domElement, colorName, append = "") {
    colorCode = colors[colorName];
    domElement.innerText = colorName + append;
    domElement.style.color = colorCode;
}

function toggleDark() {
    body.classList.toggle("dark");
    console.log("toggleDark");
}
darkSwitch.addEventListener("click", toggleDark);