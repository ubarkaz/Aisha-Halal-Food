const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration:1000,
}

ScrollReveal().reveal(".header_image img", {
    ...ScrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...ScrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...ScrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header_content .header_btn", {
    ...ScrollRevealOption,
    delay:1500,
});