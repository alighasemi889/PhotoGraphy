"use strict";
window.onload = function() {
    // Show the loader for a specified duration (e.g., 5 seconds)
    setTimeout(function() {
        // Hide the loader and show the content
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000); // Delay in milliseconds (5000 ms = 5 seconds)
};


