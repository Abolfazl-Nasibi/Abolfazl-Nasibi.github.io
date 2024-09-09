if (window.innerWidth > 750){
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 180) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
}