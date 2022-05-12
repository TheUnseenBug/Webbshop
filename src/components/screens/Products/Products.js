import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard/ProductCard';
import { Container, Typography, Grid, Button, List } from '@mui/material';

const Products = ({ products, loading, error, orders }) => {
	const renderProductsCard = () => {
		if (loading)
			return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((e, i) => <ProductCard key={e} loading={true} />);
		return products.map((product, i) => {
			const order = orders.find((order) => order.product.id === product.id);
			const quantity = order ? order.quantity : 0;
			return <ProductCard key={i} {...product} loading={false} quantity={quantity} />;
		});
	};

	return (
		<div id="Products__screen">
			<Container
				style={{ minWidth: '100%', height: '100%', paddingTop: '50px' }}
				sx={{ bgcolor: 'background.paper' }}
			>
				<Container maxWidth="md">
					<div className="Products__view">
						<div
							className="Products__view__header"
							style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}
						>
							<Typography variant="h1" sx={{ color: 'text.primary' }}>
								Products
							</Typography>
						</div>
						<Grid container spacing={2} justify={'center'}>
							<Grid item xs={12}>
								<List sx={{ bgcolor: 'background.default' }}>{renderProductsCard()}</List>
							</Grid>
						</Grid>
						<div
							style={{
								padding: '20px 0px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Link style={{ textDecoration: 'none' }} to={{ pathname: '/checkout' }}>
								<Button variant="contained">Checkout</Button>
							</Link>
						</div>
					</div>
				</Container>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { items, loading, error } = state.products;
	const { orders } = state.cart;
	return {
		products: items,
		loading,
		error,
		orders
	};
};

export default connect(mapStateToProps)(Products);
