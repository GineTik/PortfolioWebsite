import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.lime['400']
				}
			},
			keyframes: {
				show: {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '100'
					}
				}
				// showPopover: {
				// 	from: {
				// 		opacity: '0',
				// 		transform: 'translateY(3vw)'
				// 	},
				// 	to: {
				// 		opacity: '1',
				// 		transform: 'translateY(0)'
				// 	}
				// },
				// hidePopover: {
				// 	from: {
				// 		opacity: '1',
				// 		transform: 'translateY(0)'
				// 	},
				// 	to: {
				// 		opacity: '0',
				// 		transform: 'translateY(3vw)'
				// 	}
				// }
			},
			animation: {
				show: 'show 1s ease-in-out'
				// showPopover: 'showPopover 150ms ease-in-out',
				// hidePopover: 'hidePopover 150ms ease-in-out'
			}
		}
	},
	plugins: []
} satisfies Config

export default config
