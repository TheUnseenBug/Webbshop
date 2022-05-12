import Products from '../components/screens/Products/Products';
import Checkout from '../components/screens/Checkout/Checkout';
import About from '../components/About/About';
import Deals from '../components/Deals/Deals';

const NoMatch = () => {
	return <div>404</div>;
};
export const ROUTES = [
	{
		path: '/checkout',
		exact: true,
		component: Checkout
	},
	{
		path: '/',
		exact: true,
		component: Products
	},
	{
		path: '/deals',
		exact: true,
		component: Deals
	},
	{
		path: '/about',
		exact: true,
		component: About
	},
	{
		path: '*',
		exact: true,
		component: NoMatch
	}
];
