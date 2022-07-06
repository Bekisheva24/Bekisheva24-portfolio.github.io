const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');
if (burger) {
	burger.addEventListener("click", function (e) {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	});

}