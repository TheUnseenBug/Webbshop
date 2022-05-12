import React from 'react';
import { connect } from 'react-redux';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { toggleTheme } from '../../reduxStore/actions/actionTheme';

const DarkMode = (props) => {
	return (
		<div>
			<IconButton onClick={() => props.toggle()}>
				{props.theme === 'light' ? (
					<DarkModeIcon sx={{ color: 'white' }} />
				) : (
					<LightModeIcon sx={{ color: 'white' }} />
				)}
			</IconButton>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { theme } = state;
	console.log({ theme });
	return { theme };
};

const dispatchToProps = (dispatch) => {
	return {
		toggle: () => dispatch(toggleTheme())
	};
};

export default connect(mapStateToProps, dispatchToProps)(DarkMode);
