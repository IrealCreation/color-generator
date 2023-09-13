// DOM
const resultColor = document.getElementById("result-color");
const resultParagraph = document.getElementById("result-paragraph");

// Chargement des couleurs
let colors;
fetch("colors.json")
    .then((response) => response.json())
    .then((json) => colors = json);

function pickColor() {
    if(typeof colors == "object") {
        var keys = Object.keys(colors);
        return keys[ keys.length * Math.random() << 0];
    }
    else {
        console.log("Les couleurs ne sont pas chargées")
    }
}

function rollColors() {
    colorName = pickColor();
    colorCode = colors[colorName];
    resultColor.innerText = colorName;
    resultColor.style.color = colorCode;
}