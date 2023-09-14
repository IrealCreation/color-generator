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
    rolls_nb = 6;
    delay = 100;
    for (let i = 1; i <= rolls_nb; i++) {
        console.log(i);
        setTimeout(() => {
            console.log("delay");
            const colorName = pickColor();
            const append = (i == rolls_nb ? " !" : "");
            displayColor(resultColor, colorName, append);
        }, delay * i);
    }
}
buttonRoll.addEventListener("click", rollColors);