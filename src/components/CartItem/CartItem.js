import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const CartItem = ({ product, quantity }) => {
	return (
		<div>
			<ListItem>
				<ListItemAvatar>
					<Avatar
						variant="rounded"
						sx={{ width: 65, height: 92, bgcolor: 'background.paper', marginRight: '20px' }}
					>
						{<img style={{ width: 65, objectFit: 'contain' }} src={product.image} alt={product.title} />}
					</Avatar>
				</ListItemAvatar>
				<ListItemText sx={{ color: 'text.primary' }}>
					{product.title}
					<br></br> {parseInt(product.price) * quantity} kr
				</ListItemText>
				<ControlButtons product={product} quantity={quantity} />
			</ListItem>
		</div>
	);
};

export default CartItem;
