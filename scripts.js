const images = document.querySelectorAll(".gallery img");
const imageCaption = document.getElementById("imageCaption");
const modal = document.getElementById("imageModal");
const largeImage = document.getElementById("largeImage");
const closeButton = document.querySelector(".close");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentImage = 0;

// Open image
images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentImage = index;
       largeImage.src = image.src;
imageCaption.textContent = image.alt;
modal.style.display = "block";
    });
});

// Close image
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