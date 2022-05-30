import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { toggleTheme } from '../../reduxStore/actions/actionTheme';
import { connect } from 'react-redux';
import CartButton from '../CartButton/CartButton';
import DarkMode from '../darkMode/DarkMode';

const Navbar = (props) => {
	const history = useHistory();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ bgcolor: 'background.appBar' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Dennis Store
					</Typography>
					<Button onClick={() => history.push('/')} color="inherit">
						Products
					</Button>
					<Button onClick={() => history.push('/deals')} color="inherit">
						Deals
					</Button>

					<DarkMode />
					<CartButton />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

const dispatchToProps = (dispatch) => {
	return {
		toggle: () => dispatch(toggleTheme())
	};
};

export default connect(null, dispatchToProps)(Navbar);
