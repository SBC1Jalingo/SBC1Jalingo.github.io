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




// Get the modal
const modal = document.getElementById("imageModal");

// Get the large image
const largeImage = document.getElementById("largeImage");

// Get the close button
const closeButton = document.querySelector(".close");

// Get the previous and next buttons
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Get all gallery images
const galleryImages = document.querySelectorAll(".gallery-image");

// Keep track of which image we're viewing
let currentImage = 0;


// Open the popup when an image is clicked
galleryImages.forEach((image, index) => {

    image.addEventListener("click", function () {

        currentImage = index;

        largeImage.src = galleryImages[currentImage].src;

        modal.style.display = "block";
    });

});


// Show the previous image
prevButton.addEventListener("click", function () {

    currentImage--;

    // If we're at the first image, go to the last image
    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    largeImage.src = galleryImages[currentImage].src;

});


// Show the next image
nextButton.addEventListener("click", function () {

    currentImage++;

    // If we're at the last image, go back to the first image
    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    largeImage.src = galleryImages[currentImage].src;

});


// Close the popup
closeButton.addEventListener("click", function () {

    modal.style.display = "none";

});