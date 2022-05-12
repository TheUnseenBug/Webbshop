import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';

const CartButton = ({ orders }) => {
	const history = useHistory();

	return (
		<IconButton onClick={() => history.push('/checkout')}>
			<Badge badgeContent={orders.length} color="info">
				<ShoppingCartIcon sx={{ color: '#ffffff' }} />
			</Badge>
		</IconButton>
	);
};

const mapStateToProps = (state) => {
	const { orders } = state.cart;
	return { orders };
};

export default connect(mapStateToProps)(CartButton);
