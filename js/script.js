var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all images in the gallery
var images = document.querySelectorAll(".gallery-item img");

// Loop through the images and add an event listener to each
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// video
var modal1 = document.getElementById("modal1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// Get all images in the gallery
var images = document.querySelectorAll(".buttons button");

// Loop through the images and add an event listener to each
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal1.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
