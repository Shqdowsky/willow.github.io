let burger = document.querySelector(".icon-menu")
let menu = document.querySelector(".footer__menu")
let body = document.querySelector("body")

burger.addEventListener("click", function () {
   burger.classList.toggle("active");
   menu.classList.toggle("active");
   body.classList.toggle("lock");
})

let ask = parseInt(prompt("Введите количество чисел: "));

let mas = []
for (let k = 0; k < ask; k++) {
   let user_choise = parseInt(prompt("Введите число: "));
   mas.push(user_choise);
}

let result = 0;
for (let i = 0; i < mas.length; i++) {
   result += mas[i];
}
alert(result)