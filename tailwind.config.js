/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			s: "576px",
			medium: "768px",
			large: "992px",
			xl: "1200px",
		},
		extend: {
			colors: {
				background: "#F9DDD2",
				text: "#6e78ff",
			},
		},
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			logo: ["Namdhinggo", "serif"],
		},
	},
	plugins: [],
};
