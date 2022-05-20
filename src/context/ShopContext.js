import createDataContext from './createDataContext';
import shopApi from '../api/shops';

const shopReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_shops':
			return action.payload;
		default:
			return state;
	}
};

const fetchShops = (dispatch) => async () => {
	const response = await shopApi.get('/getAll');
	dispatch({ type: 'fetch_shops', payload: response.data });
};

export const { Provider, Context } = createDataContext(
	shopReducer,
	{ fetchShops },
	[]
);
