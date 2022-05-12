import React from 'react';
import { Typography, Container, Grid, Divider, Box, Collapse } from '@mui/material';
import { connect } from 'react-redux';
import CartItem from '../../CartItem/CartItem';
import { TransitionGroup } from 'react-transition-group';

const Checkout = ({ orders, totalPrice, deliveryFee, productPrice }) => {
	const renderCartItems = () => {
		return orders.map((order, i) => (
			<Collapse key={i}>
				<CartItem key={i} {...order} />
			</Collapse>
		));
	};

	const bigText = { fontWeight: 700, fontSize: '1.rem', color: 'text.primary', padding: '7px' };
	const center = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
	return (
		<Box id="Checkout__screen" sx={{ paddingBottom: '50px', bgcolor: 'background.paper' }}>
			<Container maxWidth="sm">
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						paddingBottom: '30px',
						paddingTop: '15px',
						bgcolor: 'Background.paper'
					}}
				>
					<Typography variant="h1" sx={{ color: 'text.primary' }}>
						Checkout
					</Typography>
				</Box>
				<Grid container spacing={2} justify="center" sx={{ bgcolor: 'background.default' }}>
					<Grid item xs={12}>
						<TransitionGroup>{renderCartItems()}</TransitionGroup>
					</Grid>
				</Grid>
				<Divider sx={{ paddingBottom: '20px' }} />
				<Grid
					container
					item
					xs={12}
					spacing={2}
					justify="center"
					sx={{ bgcolor: 'background.default', paddingTop: '0px', center, marginBottom: '200%' }}
				>
					<Grid item xs={10} sx={bigText}>
						Subtotal:
					</Grid>
					<Grid item xs={2} sx={bigText}>
						{productPrice} kr
					</Grid>
					<Grid item xs={10} sx={bigText}>
						Shipping:
					</Grid>
					<Grid item xs={2} sx={bigText}>
						{deliveryFee} kr
					</Grid>
					<Grid item xs={10} sx={bigText}>
						Total:
					</Grid>
					<Grid item xs={2} sx={bigText}>
						{totalPrice} kr
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

const mapStateToProps = (state) => {
	const { orders, totalPrice, deliveryFee, productPrice } = state.cart;
	return {
		orders,
		totalPrice,
		deliveryFee,
		productPrice
	};
};

export default connect(mapStateToProps)(Checkout);
