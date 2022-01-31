const btn = document.querySelector("button.btn-menu");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener('click', () => {
	menu.classList.toggle('hidden');
	console.log("hidden done")
});