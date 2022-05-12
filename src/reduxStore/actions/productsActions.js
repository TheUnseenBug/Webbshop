import * as actionTypes from './actionTypes';

// set loader state
export const fetchProductsStart = () => {
	return { type: actionTypes.FETCH_PRODUCTS_START };
};

export const fetchProductsFail = (error) => {
	return { type: actionTypes.FETCH_PRODUCTS_FAIL, error: error };
};

export const fetchProductsSuccess = (data) => {
	return {
		type: actionTypes.FETCH_PRODUCTS_SUCCESS,
		payload: data
	};
};

export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(fetchProductsStart());
		try {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFail(error));
		}
	};
};
