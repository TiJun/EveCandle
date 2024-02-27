const burger = document.querySelector("#burger");
const mobileNav = document.querySelector("#mobile-nav");
const links = document.querySelectorAll("#link");
const handleNav = () => {
	mobileNav.classList.toggle("translate-x-[-100%]");
	mobileNav.classList.toggle("translate-x-0");
};
links.forEach(el => {
	el.addEventListener("click", () => {
		mobileNav.classList.toggle("translate-x-[-100%]");
		mobileNav.classList.toggle("translate-x-0");
	});
});
burger.addEventListener("click", handleNav);
