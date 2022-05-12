import { Skeleton, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const ProductCard = ({ title, image, price, loading, id, quantity }) => {
	const product = { title, image, id, price };
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar
					variant="rounded"
					sx={{ width: 65, height: 92, bgcolor: 'background.paper', marginRight: '20px' }}
				>
					{loading ? (
						<Skeleton variant="rectangular" width={65} height={92} />
					) : (
						<img style={{ width: 65, objectFit: 'contain' }} src={image} alt={title} />
					)}
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				sx={{ color: 'text.primary' }}
				primary={loading ? <Skeleton variant="text" width={100} height={20} /> : title}
				secondary={loading ? <Skeleton variant="text" width={40} height={20} /> : `${price} kr`}
			/>
			<ControlButtons product={product} quantity={quantity} />
		</ListItem>
	);
};

export default ProductCard;
