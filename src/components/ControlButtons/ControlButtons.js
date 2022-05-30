import React, { useState } from 'react';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../reduxStore/actions/cartActions';
import { IconButton, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ControlButtons = ({ onIncrement, onDecrement, quantity, product }) => {
	const [snackPack, setSnackPack] = React.useState([]);
	const [transition, setTransition] = React.useState(undefined);
	const [open, setOpen] = React.useState(false);
	const [messageInfo, setMessageInfo] = React.useState(undefined);

	const disabled = !quantity && quantity < 1;
	const shadowQuantityStyle = !quantity || quantity === 0 ? 0 : 1;

	React.useEffect(() => {
		if (snackPack.length && !messageInfo) {
			setMessageInfo({ ...snackPack[0] });
			setSnackPack((prev) => prev.slice(1));
			setOpen(true);
		} else if (snackPack.length && messageInfo && open) {
			setOpen(false);
		}
	}, [snackPack, messageInfo, open]);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return setOpen(false);
		}
	};

	const handleIncrement = (message) => {
		onIncrement(product);
		setTimeout(() => {
			setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
			setOpen(true);
		}, 50);
	};

	const handleDecrement = (message) => {
		onDecrement(product);
		setTimeout(() => {
			setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
			setOpen(true);
		}, 50);
	};

	const handleExited = () => {
		setMessageInfo(undefined);
	};

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
			<IconButton onClick={() => handleIncrement('Added to cart')} sx={{ color: 'background.appBar' }}>
				<AddIcon fontSize="large" sx={{ color: '#00c896' }} />
				<Snackbar
					key={messageInfo ? messageInfo.key : undefined}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					TransitionProps={{ onExited: handleExited }}
					message={messageInfo ? messageInfo.message : undefined}
				/>
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
			<IconButton onClick={() => handleDecrement('Removed from cart')} disabled={disabled}>
				<Snackbar
					key={messageInfo ? messageInfo.key : undefined}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					TransitionProps={{ onExited: handleExited }}
					message={messageInfo ? messageInfo.message : undefined}
				/>
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
