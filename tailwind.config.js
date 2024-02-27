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
				background: "#eeddd3",
				text: "#6e78ff",
			},
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif']
		}
	},
	plugins: [],
};
