/** @type {import('tailwindcss').Config} */



module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				pokemon:{
					main:{
						gold: '#fbd743',
						red: '#ff1f1f',
						blue: '#5bd9ff',
						navy: '#363b81',
						screen: '#627820'
					},
					type:{
						grass: '#66f70A',
						fire: '#f8b80d',
						water: '#36aef6',
						normal:'#eaeade',
						flying: '#dbe5ea',
						bug: '#d8fe9d',
						poison: '#c972eb',
						electric:'#f7ff84',
						ground:'#ece193',
						fighting:'#d26063',
						psychic:'#f45792',
						rock:'#94824e',
						ice:'#65d0e4',
						ghost:'#bc98ca',
						dragon:'#8A55FD',
						dark:'#906852',
						steel:'#bac5c3',
						fairy:'#fdd1e0'
					}
				}
			}
		},
		fontFamily:{
			pokemon: ['"Press Start 2P"', 'cursive']
		}
	},
	plugins: [],
}
