import createDataContext from './createDataContext';
import users from '../api/users';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'login':
			return action.payload;
		default:
			return state;
	}
};

const login =
	(dispatch) =>
	async ({ username, password }) => {
		const response = await users.post('/authenticate', {
			username,
			password,
		});

		dispatch({ type: 'login', payload: response.data });
	};

export const { Provider, Context } = createDataContext(
	authReducer,
	{
		login,
	},
	[]
);
