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
			},
			animation: {
				show: 'show 1s ease-in-out'
			}
		}
	},
	plugins: []
} satisfies Config

export default config
