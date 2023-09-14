// DOM
const buttonRoll = document.getElementById("roll");
const resultColor = document.getElementById("result-color");
const resultParagraph = document.getElementById("result-paragraph");

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
    displayColor(resultColor, colorName, " !");
}

window.onload = (event) => {
    buttonRoll.addEventListener("click", rollColors);
}