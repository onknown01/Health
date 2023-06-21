const oepnMobileNav = () => {
  const mobileNav = document.querySelector(".mobile_nav");
  mobileNav.classList.remove("hide");
};

const closeMobileNav = () => {
  const mobileNav = document.querySelector(".mobile_nav");
  mobileNav.classList.add("hide");
};

let navbar = document.querySelector(".hero_section .navbar"),
  stick = navbar.getBoundingClientRect().top;
console.log(stick);

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > stick) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
