alert("JavaScript is working!");

const message = document.getElementById("message");





    
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const largeImage = document.getElementById("largeImage");
const closeButton = document.querySelector(".close");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        largeImage.src = image.src;
    });
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});