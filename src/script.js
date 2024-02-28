const burger = document.querySelector("#burger");
const mobileNav = document.querySelector("#mobile-nav");
const links = document.querySelectorAll("#link");
const desktopNav = document.querySelectorAll("#desktop-nav");
const handleNav = () => {
	mobileNav.classList.toggle("translate-x-[-100%]");
	mobileNav.classList.toggle("translate-x-0");
	burger.classList.toggle("is-active");
};
// const scrollSpy = () => {
//     window.scrollY >=
// }
links.forEach(el => {
	el.addEventListener("click", () => {
		mobileNav.classList.toggle("translate-x-[-100%]");
		mobileNav.classList.toggle("translate-x-0");
		burger.classList.remove("is-active");
	});
});
burger.addEventListener("click", handleNav);
