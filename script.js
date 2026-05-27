const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const page = document.querySelector(".page");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    overlay.classList.toggle("show");
    page.classList.toggle("shift");
});

overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
    page.classList.remove("shift");
});
