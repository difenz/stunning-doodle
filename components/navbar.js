let lastScrollTop = 0;
let navBar = document.getElementById('nav');

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-150px"
    } else {
        navBar.style.top = "0"
    }
    lastScrollTop = scrollTop;
});