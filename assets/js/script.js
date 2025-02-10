document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.getElementById("top-bar");
    const arrow = document.getElementById("arrow");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            topBar.classList.add("show");
            arrow.classList.add("hide");
        } else {
            topBar.classList.add("show"); // On garde la top bar visible
        }
    });
});
