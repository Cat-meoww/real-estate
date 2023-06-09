const colors = require('tailwindcss/colors');
let newcolors = {
	mongo: {
		100: '#6ce196',
		neutral: '#bfb8ac',
		white: '#e5e0d8',
		icon: '#a49b8e',
		bluetext: '#79a0bb',
		greentext: '#9fdfb4',
		card: {
			backdrop: '#131d2399',
			textcolor: '#a79e91',
			bg: '#242525',
			hoverbg: '#2b3531',
			btnborder: '#575b5c'
		},
		tabs: {
			texthover: '#cac3b8',
			border: '#3f4242',
			selected: {
				text: '#9be2c6',
				tile: '#24854a'
			},
			filter: {
				border: '#4b4f4f',
				badge: '#464949'
			}
		},
		sidebar: {
			db: {
				hoverbg: '#24252500'
			}
		},
		btn: {
			dark: {
				bg: '#242c28',
				hover: {
					bg: '#242525',
					border: '#575b5c',
					box: {
						b: '#0d0d0d4d',
						c: '#2b3531'
					}
				},
				border: '#575b5c',
				color: '#b9b1a6',
				box: '#131d234d'
			}
		},
		green: {
			btn: '#1b6744',
			hover: '#1f5240'
		}
	},
	mongodark: {
		100: '#242525', //card bg
		200: '#404243' //card onselec border
	},
	mongoshade: '#2a343b',
	air: {
		pink: '#FF385C',
		black: '#222222',
		muted: '#717171',
		white: '#FFFFFF',
		hover: {
			bg: "#f7f7f7"
		},
		grey: {
			1: "#DDDDDD",
			border:"#b0b0b0"
		}
	}
};
let mycolors = {
	...colors,
	...newcolors
};
module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/Components/**/*.{svelte,js,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [{
			mytheme: {
				primary: '#000000',
				secondary: '#000000',
				accent: '#37cdbe',
				neutral: '#3d4451',
				'base-100': '#ffffff',

			},

		}]
	},
	theme: {
		colors: mycolors,
		extend: {
			boxShadow: {
				'search': '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
				'search-hover': "0 2px 4px rgba(0,0,0,0.18)"
			}
		}
	}
};