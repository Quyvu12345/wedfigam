document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("modal-info");

    // Get the button that opens the modal
    var infoButtons = document.querySelectorAll('.info-button');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on an info button, open the modal 
    infoButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
        };
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Delete button functionality
    var deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.onclick = function() {
            this.closest('.movie-card').remove();
        };
    });
});
