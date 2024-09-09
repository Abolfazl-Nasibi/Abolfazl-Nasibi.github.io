window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 840) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};