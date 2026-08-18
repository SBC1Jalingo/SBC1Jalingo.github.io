const themeButton = document.getElementById("themeButton");
const colorButton = document.getElementById("colorButton");
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


    
