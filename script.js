const burger = document.querySelector("#burger");
const mobileNav = document.querySelector("#mobile-nav");
const links = document.querySelectorAll(".link");
const desktopNav = document.querySelectorAll("#desktop-nav");
const handleNav = () => {
	if (mobileNav.classList.contains("-translate-x-[100%]")) {
		mobileNav.classList.remove("-translate-x-[100%]");
		mobileNav.classList.add("-translate-x-[50%");
	} else {
		mobileNav.classList.remove("-translate-x-[50%");
		mobileNav.classList.add("-translate-x-[100%]");
	}
	burger.classList.toggle("is-active");
};
links.forEach(el => {
	el.addEventListener("click", () => {
		mobileNav.classList.toggle("-translate-x-[100%]");
		mobileNav.classList.toggle("-translate-x-[0%");
		burger.classList.remove("is-active");
	});
});
burger.addEventListener("click", handleNav);
