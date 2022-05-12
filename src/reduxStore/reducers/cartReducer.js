import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	deliveryFee: 0,
	productPrice: 0,
	orders: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_CART:
			return { ...initialState };

		case actionTypes.CALCULATE_TOTAL_CART_AMOUNT:
			return {
				...state,
				totalPrice: action.payload.totalPrice,
				deliveryFee: action.payload.deliveryFee,
				productPrice: action.payload.productPrice
			};

		case actionTypes.INCREMENT_PRODUCT:
			const incrementedArray = incrementProducts(state.orders, action);
			return {
				...state,
				orders: incrementedArray
			};

		case actionTypes.DECREMENT_PRODUCT:
			const filtered = decrementProducts(state.orders, action);
			return {
				...state,
				orders: filtered
			};

		default:
			return state;
	}
};

const findProductIndex = (array, id) => {
	if (array.length === 0) {
		return -1;
	} else {
		const index = array.findIndex((item) => item.product.id === id);
		return index;
	}
};

const incrementProducts = (orders, action) => {
	const copyOfArray = [...orders];
	const productIndex = findProductIndex(copyOfArray, action.payload.id);

	if (productIndex === -1) {
		const order = { product: action.payload, quantity: 1 };
		copyOfArray.push(order);
	} else {
		copyOfArray[productIndex] = {
			product: copyOfArray[productIndex].product,
			quantity: copyOfArray[productIndex].quantity + 1
		};
	}
	return copyOfArray;
};

const decrementProducts = (orders, action) => {
	const copyOfArray = [...orders];
	const productIndex = findProductIndex(copyOfArray, action.payload.id);

	if (productIndex !== -1 && copyOfArray[productIndex].quantity > 1) {
		copyOfArray[productIndex] = {
			product: copyOfArray[productIndex].product,
			quantity: copyOfArray[productIndex].quantity - 1
		};
	} else if (productIndex !== -1) {
		copyOfArray.splice(productIndex, 1);
	}

	return copyOfArray;
};

export default reducer;
