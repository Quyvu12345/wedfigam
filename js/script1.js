// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.querySelector(".movie1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.addEventListener('click', function() {
    modal.style.display = "block";
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
//login
var modal1 = document.getElementById("modal1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// Get all images in the gallery
var images = document.querySelectorAll(".avat");

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
//
var modal1 = document.getElementById("modal1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// Get all images in the gallery
var images = document.querySelectorAll(".");

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
//
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modal1 = document.getElementById('modal1');
    const openModal = document.getElementById('openModal');
    const nextModal = document.getElementById('nextModal');
    const close = document.querySelector('.close');
    const close1 = document.querySelector('.close1');
    const continueButton = document.getElementById('continueButton');
    const backButton = document.getElementById('backButton');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');

    openModal.addEventListener('click', function() {
        modal.classList.add('active');
    });

    nextModal.addEventListener('click', function() {
        modal.classList.remove('active');
        modal1.classList.add('active');
    });

    close.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    close1.addEventListener('click', function() {
        modal1.classList.remove('active');
    });

    continueButton.addEventListener('click', function() {
        step1.classList.remove('active');
        step2.classList.add('active');
    });

    backButton.addEventListener('click', function() {
        step2.classList.remove('active');
        step1.classList.add('active');
    });
});
