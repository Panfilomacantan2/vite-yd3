/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				labelColor: '#374146',
				darkTextColor: '#1E293B',
				lightBackgroundColor: '#ECF1F1',
				lightTextColor: '#374146',
				lightBorderColor: '#92A9BD',
			},
		},
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: ['light', 'dark'],
	},
};
