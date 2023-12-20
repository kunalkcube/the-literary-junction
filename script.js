// ===== Toggle Menu =====
const NavMenuIcon = document.querySelector(".menu_toggle");
const menu = document.querySelector(".nav_menu");
function toggleMenu() {
    menu.classList.toggle("active");
    const icon = NavMenuIcon.querySelector("i");
    icon.classList.toggle("spinning");
    if (menu.classList.contains("active")) {
        icon.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        icon.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}
NavMenuIcon.addEventListener("click", toggleMenu);
function hideMenu() {
    menu.classList.remove("active");
    NavMenuIcon.querySelector("i").classList.remove("spinning");
    NavMenuIcon.querySelector("i").classList.replace("ri-close-line", "ri-menu-3-line");
}
const menuItems = document.querySelectorAll(".nav_menu a");
const login_Button = document.querySelector(".nav_button");
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", hideMenu);
});
login_Button.addEventListener("click", hideMenu);


// ===== Modal =====
const loginButton = document.querySelector(".nav_button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
loginButton.addEventListener("click", () => {
    modal.style.display = "flex";
});
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});


// ===== Form Switch =====
const switchForms = document.querySelectorAll(".switch_form");
const loginForm = document.querySelector(".login_form");
const signupForm = document.querySelector(".signup_form");
switchForms.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = loginForm.style.display === "none" ? "flex" : "none";
        signupForm.style.display = signupForm.style.display === "none" ? "flex" : "none";
    });
});