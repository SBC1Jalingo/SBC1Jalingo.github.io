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
imageCaption.textContent = images[currentImage].alt;
});

// Next image
nextButton.addEventListener("click", function() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }
largeImage.src = images[currentImage].src;
imageCaption.textContent = images[currentImage].alt;
});










// Back to Top button
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Go to Contact button
const goToContact = document.getElementById("goToContact");

goToContact.addEventListener("click", function() {
    document.getElementById("Contact").scrollIntoView({
        behavior: "smooth"
    });
});






// Church Gallery Automatic Slideshow

const slides = document.querySelectorAll(".slide");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");
const galleryDots = document.getElementById("galleryDots");

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });

    galleryDots.querySelectorAll("button").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
}

// Create navigation dots
slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.addEventListener("click", () => {
        showSlide(index);
    });

    galleryDots.appendChild(dot);
});

// Next image
galleryNext.addEventListener("click", () => {
    showSlide((currentSlide + 1) % slides.length);
});

// Previous image
galleryPrev.addEventListener("click", () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
});

// Start slideshow
showSlide(0);

setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
}, 4000);





