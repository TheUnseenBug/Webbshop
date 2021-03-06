import { Box, Container, Grid, List, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';

const Deals = (props) => {
	const [cartId, setCartId] = useState(1);
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://fakestoreapi.com/carts');
			const carts = await response.json();
			setCarts(carts);
		};
		fetchData();
	}, []);

	const renderCarts = () => {
		if (carts.length === 0) return [1, 2, 3, 4, 5, 6, 7, 8].map((e) => <Cart loading={true} key={e} />);
		return carts.map((cart, i) => (
			<Cart key={i} loading={false} {...cart} setCartId={setCartId} selected={cartId === cart.id} />
		));
	};

	return (
		<Box id="Deals" sx={{ bgcolor: 'background.paper', minWidth: '100%' }}>
			<Container maxWidth="xl" sx={{ bgcolor: 'background.paper' }}>
				<Typography variant="h1" mb={5} py={5} pl={3} sx={{ color: 'text.primary' }}>
					Select a deal!
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} md={8} lg={6}>
						<List>{renderCarts()}</List>
					</Grid>
					<Grid item xs={12} md={4} lg={6}>
						<Paper elevation={3}>
							<iframe
								src={`https://techoverklarna.herokuapp.com/cart-checkout/${cartId}`}
								title="Klarna"
								width={'100%'}
								height={'1000px'}
								style={{ border: 'none' }}
							></iframe>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Deals;
