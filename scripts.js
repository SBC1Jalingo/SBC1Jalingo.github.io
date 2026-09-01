const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const largeImage = document.getElementById("largeImage");
const closeButton = document.querySelector(".close");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImage = 0;

<<<<<<< HEAD
// Open image
=======
// Open an image
>>>>>>> e49a9979cfe49a1e2cc47cb03661b720f257ecd9
images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentImage = index;
        largeImage.src = image.src;
        modal.style.display = "block";
    });
});

<<<<<<< HEAD
// Close image
=======
// Close the popup
>>>>>>> e49a9979cfe49a1e2cc47cb03661b720f257ecd9
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Previous image
prevButton.addEventListener("click", function() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    largeImage.src = images[currentImage].src;
});

// Next image
nextButton.addEventListener("click", function() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    largeImage.src = images[currentImage].src;
});