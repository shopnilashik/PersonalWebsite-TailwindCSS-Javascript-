const btn = document.querySelector("button.btn-menu");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener('click', () => {
	menu.classList.toggle('hidden');
	console.log("hidden done")
});

window.addEventListener('scroll', () => {
	let content = document.querySelector('.work');
	let contentPosition = content.getBoundingClientRect().top;
	let secontPosition = window.innerHeight / 3;
	if (contentPosition < secontPosition) {
		content.classList.add('active');
	}
	else {
		content.classList.remove('active');
	}
})
