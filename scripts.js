const themeButton = document.getElementById("themeButton");
const colorButton = document.getElementById("colorButton");
const message = document.getElementById("message");

// Light and dark mode
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Switch to Dark Mode";
        message.textContent = "Light mode is now on!";
    } else {
        themeButton.textContent = "Switch to Light Mode";
        message.textContent = "Dark mode is now on!";
    }
});

// Change the colour of a button when it is clicked
colorButton.addEventListener("click", function () {
    colorButton.classList.toggle("changed");

    if (colorButton.classList.contains("changed")) {
        colorButton.textContent = "My Colour Changed!";
    } else {
        colorButton.textContent = "Click Me - Change My Colour";
    }
});
