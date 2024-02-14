/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
