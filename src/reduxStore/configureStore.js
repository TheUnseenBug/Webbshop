import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import * as actions from './actions/index';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import ThemeReducer from './reducers/themeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	theme: ThemeReducer,
	cart: cartReducer,
	products: productsReducer
});

const configureStore = () => {
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

	// Fetch the products
	store.dispatch(actions.fetchProducts());

	return store;
};

export default configureStore;
