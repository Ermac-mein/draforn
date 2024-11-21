// JavaScript to toggle the side menu visibility
document.querySelector(".menu-icon").addEventListener("click", function() {
    document.querySelector(".side-menu").classList.toggle("active");
});

// If you want to close the side menu when clicking on a link or the close icon
document.querySelector(".side-menu .close-icon").addEventListener("click", function() {
    document.querySelector(".side-menu").classList.remove("active");
});
