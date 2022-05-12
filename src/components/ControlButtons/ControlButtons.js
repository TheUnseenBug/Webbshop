import React from 'react';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../reduxStore/actions/cartActions';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ControlButtons = ({ onIncrement, onDecrement, quantity, product }) => {
	const disabled = !quantity && quantity < 1;
	const shadowQuantityStyle = !quantity || quantity === 0 ? 0 : 1;

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				right: '0px',
				height: '100%'
			}}
		>
			<IconButton onClick={() => onIncrement(product)}>
				<AddIcon fontSize="large" sx={{ color: '#00c896' }} />
			</IconButton>
			<div
				style={{
					backgroundColor: '#00000017',
					padding: '7px 12px',
					borderRadius: '50%',
					color: '#4e6f7d',
					opacity: shadowQuantityStyle
				}}
			>
				{quantity ? quantity : 0}
			</div>
			<IconButton onClick={() => onDecrement(product)} disabled={disabled}>
				<RemoveIcon fontSize="large" sx={{ color: disabled ? '#f7f8fa' : '#00c896' }} />
			</IconButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: (payload) => dispatch(incrementProduct(payload)),
		onDecrement: (payload) => dispatch(decrementProduct(payload))
	};
};

export default connect(null, mapDispatchToProps)(ControlButtons);
