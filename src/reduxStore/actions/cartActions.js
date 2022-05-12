import * as actionTypes from './actionTypes';

export const resetCart = () => ({ type: actionTypes.RESET_CART });

export const calculateTotalCartAmount = () => {
	return (dispatch, getState) => {
		const state = getState();
		const { orders } = state.cart;
		let totalProductPrice = 0;
		orders.forEach((order) => {
			const { product, quantity } = order;
			const price = parseInt(product.price);
			const sum = price * quantity;
			totalProductPrice += sum;
		});

		const DELIVERY_COST = 39;
		const deliveryFee = totalProductPrice > 500 ? 0 : DELIVERY_COST;
		const totalPrice = deliveryFee + totalProductPrice;
		const payload = { totalPrice, deliveryFee, productPrice: totalProductPrice };

		dispatch({ type: actionTypes.CALCULATE_TOTAL_CART_AMOUNT, payload });
	};
};

export const incrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.INCREMENT_PRODUCT, payload });
		dispatch(calculateTotalCartAmount());
	};
};

export const decrementProduct = (payload) => {
	return (dispatch) => {
		dispatch({ type: actionTypes.DECREMENT_PRODUCT, payload });
		dispatch(calculateTotalCartAmount());
	};
};
