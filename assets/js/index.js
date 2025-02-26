document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.getElementById("top-bar");
    const arrow = document.getElementById("arrow");
    const mainTitle = document.querySelector(".main-title");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            topBar.classList.add("show");
            arrow.classList.add("hide");
            mainTitle.classList.add("small-title");
        } else {
            topBar.classList.add("show"); // On garde la top bar visible
        }
    });
});

