function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("show");
}

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", function () {

        document
            .getElementById("mobileMenu")
            .classList.remove("show");

    });

});