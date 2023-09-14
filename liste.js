const list = document.getElementById("list");

// Slight delay until the JSON file is loaded
setTimeout(() => {
    Object.keys(colors).forEach(colorName => {
        const li = document.createElement("li");
        displayColor(li, colorName);
        list.appendChild(li);
    });
}, 200);