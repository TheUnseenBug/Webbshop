import { createTheme } from '@mui/material/styles';
const white = '#ffffff';
const neonDark = '#2F0599';
const primary = { light: neonDark, main: neonDark, dark: neonDark, contrastText: white };

const h1 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '24px', lineHeight: '30px' };
const h2 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '24px' };
const h3 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '17px', lineHeight: '20px' };
const h4 = { fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px' };

export const lightTheme = createTheme({
	palette: {
		primary,
		background: {
			paper: '#f8fafd',
			default: '#ffffff',
			appBar: '#2F0599'
		},

		text: {
			primary: '#1b1b1b',
			secondary: '#b3b3b3'
		}
	},
	components: {
		MuiMenuItem: {
			styleOverrides: {
				root: {
					'&$selected': { color: 'red' }
				},
				selected: {}
			}
		}
	},
	typography: {
		fontFamily: [
			'Roboto',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		h1,
		h2,
		h3,
		h4
	}
});

export const darkTheme = createTheme({
	palette: {
		primary,
		background: {
			paper: '#1b1b1b',
			default: 'rgba(255, 255, 255, 0.05)',
			appBar: '#2F0599'
		},

		text: {
			primary: '#fff',
			secondary: 'rgba(255, 255, 255, 0.7)'
		}
	},
	typography: {
		fontFamily: [
			'Roboto',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		h1,
		h2,
		h3,
		h4
	}
});
