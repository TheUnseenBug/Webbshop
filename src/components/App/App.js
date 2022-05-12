import React from 'react';
import { connect } from 'react-redux';
import ScreensRoot from '../screens/Root';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../style/material-themes';
import { darkTheme } from '../../style/material-themes';

const App = ({ theme }) => {
	return (
		<ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
			<div className="App">
				<ScreensRoot />
			</div>
		</ThemeProvider>
	);
};

const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

export default connect(mapStateToProps)(App);
