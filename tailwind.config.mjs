/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,js,jsx,md,mdx,ts,tsx}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"bg-color": "var(--bg-color)",
				"bg-purple": "var(--bg-purple)",
				"bg-green": "var(--bg-green)",
				"bg-yellow": "var(--bg-yellow)",
			},
		},
	},
	plugins: [],
}
