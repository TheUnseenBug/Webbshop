const initialState = 'light';

const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return state == 'light' ? 'dark' : 'light';
			break;
		default:
			return state;
			break;
	}
};

export default themeReducer;
