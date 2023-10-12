document.addEventListener("DOMContentLoaded", function () {
    // Get references to the logo, text, and main content elements
    var logo = document.getElementById("logo");
    var text = document.getElementById("text");
    var mainContent = document.getElementById("mainContent");

    // Set initial state for the logo and text
    logo.style.opacity = 1;
    logo.style.transform = "translateY(0)";
    text.style.opacity = 0;
    text.style.transform = "translateY(300px)";
    getStartedButton.style.opacity = 0;
    getStartedButton.style.transform = "translateY(300px)";

    // Introduce a slight delay before applying the transition
    setTimeout(function () {
        logo.style.animation = "rotateLogo 2s linear";
        // Move the logo up and fade out over 4 seconds with a smooth upward translation
        logo.style.transform = "translateY(-400px)";
        logo.style.opacity = 0;

        // Show and animate the text
        text.style.transform = "translateY(0)";
        text.style.opacity = 1;
        getStartedButton.style.transform = "translateY(100px)";
        getStartedButton.style.opacity = 1;

    }, 100);

    // Display the main content after the animation
    setTimeout(function () {
        logo.style.display = "";
        mainContent.style.display = "block";
    }, 4100); // Adjust the time according to your animation duration
});

