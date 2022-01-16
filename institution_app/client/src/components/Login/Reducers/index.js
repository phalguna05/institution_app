/* eslint-disable default-param-last */
const initialState = { isLoggedIn: false };
const loginReducer = (state = initialState, action) => {
	const { type, data } = action;
	switch (type) {
		case 'LOGIN_SUCCESS':
			return { ...state, ...data };
		default:
			return state;
	}
};
export { loginReducer };
