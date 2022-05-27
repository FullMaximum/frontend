import createDataContext from './createDataContext';
import shopApi from '../api/shops';
import flowerApi from '../api/flowers';

// state: {shopId, flowers: [flower: {id, amount: 0}, ...]}
const cardReducer = (state, action) => {
	switch (action.type) {
		case 'set_shop':
			return action.payload;
		case 'change_flower':
			let newState = { ...state };
			let index = state.flowers.findIndex(
				(el) => el.id === action.payload.id
			);
			newState.flowers[index] = {
				...state.flowers[index],
				amount: action.payload.amount,
			};
			return newState;
		case 'clear_state':
			return {};
		default:
			return state;
	}
};

const setShop = (dispatch) => {
	// flowers: [flower: {id, amount: 0}, ...]
	return ({ shopId, flowers }) => {
		dispatch({ type: 'set_shop', payload: { shopId, flowers } });
	};
};

const changeFlower = (dispatch) => {
	// flower: {id, amount}
	return ({ flower }) => {
		dispatch({ type: 'change_flower', payload: flower });
	};
};

const clearState = (dispatch) => {
	return () => {
		dispatch({ type: 'clear_state' });
	};
};

export const { Provider, Context } = createDataContext(
	cardReducer,
	{
		setShop,
		changeFlower,
		clearState,
	},
	[]
);
