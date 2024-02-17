/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'red-nations': 'var(--wiki-nations-red)',
				'blue-nations': 'var(--wiki-nations-blue)',
				'green-nations': 'var(--wiki-nations-green)',	
				'amber-nations': 'var(--wiki-nations-amber)',
				'background-nations': 'var(--wiki-nations-bg)',
				'text-nations': 'var(--wiki-nations-text)',
			},
			keyframes: {
				'slide-down': {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(100%)" },
				},
				'slide-up': {
					from: { transform: "translateY(100%)" },
					to: { transform: "translateY(0)" },
				},
			},
			animation: {
				"slide-down": "slide-down 0.2s ease-out",
				"slide-up": "slide-up 0.2s ease-out",
			},
		},
	},
	plugins: [],
}