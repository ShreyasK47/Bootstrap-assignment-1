// JavaScript code for carousel
$(document).ready(function () {
    $('.carousel').carousel();
});

$(document).ready(function () {
    // Function to scroll back to top when button is clicked
    $('#backToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
