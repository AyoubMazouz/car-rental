const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./*/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				dark: '#111827',
				primary: '#2563EB',
				secondary: '#38BDF8',
				accent: '#E2E8F0',
				shading: '#F3F4F6',
				light: '#FFFF',

				// Social MEdia Colors.
				facebook: '#1877F2',
				twitter: '#1DA1F2',
				linkedin: '#0A66C2',
				youtube: '#CD201F',
				instagram: '#E1306C',
				whatsapp: '#25D366',
				tiktok: '#25F4EE'
			}
		}
	},
	plugins: []
};
