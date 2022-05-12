import { List, Paper, ListItemButton, Skeleton } from '@mui/material';
import { connect } from 'react-redux';
import Item from '../Item/Item';

const Cart = ({ loading, setCartId, id, products, selected, dbProducts }) => {
	const getMyProducts = () => {
		const productsFromDeal = [];
		products.forEach((product) => {
			const foundProduct = dbProducts.find((productFromDb) => productFromDb.id === product.productId);
			if (foundProduct) {
				productsFromDeal.push({ product: foundProduct, quantity: product.quantity });
			}
		});
		return productsFromDeal;
	};

	const renderProducts = () => {
		const myProducts = getMyProducts();
		return myProducts.map((item, i) => <Item key={i} {...item} />);
	};

	return (
		<>
			<Paper elevation={3} sx={{ marginBottom: 4, padding: 2 }}>
				{loading ? (
					<Skeleton variant="rectangular" width={'100%'} height={120} />
				) : (
					<ListItemButton onClick={() => setCartId(id)} selected={selected}>
						<List sx={{ width: '100%' }}>{renderProducts()}</List>
					</ListItemButton>
				)}
			</Paper>
		</>
	);
};

const mapStateToProps = (state) => {
	return { dbProducts: state.products.items };
};

export default connect(mapStateToProps)(Cart);
