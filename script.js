const burger = document.getElementById('burger');
const ul = document.querySelector('.header__container');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});