let burger = document.querySelector(".icon-menu")
let menu = document.querySelector(".footer__menu")
let body = document.querySelector("body")

burger.addEventListener("click", function () {
   burger.classList.toggle("active");
   menu.classList.toggle("active");
   body.classList.toggle("lock");
})
