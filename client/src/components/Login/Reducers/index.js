import jwt from 'jwt-decode';

const userData = localStorage.getItem('token')
	? { ...jwt(localStorage.getItem('token')), isLoggedIn: true }
	: { isLoggedIn: false };
const intialState = { ...userData };
const loginReducer = (state = intialState, action) => {
	const { type, data } = action;
	switch (type) {
		case 'LOGIN_SUCCESS':
			return { ...state, ...data, isLoggedIn: true };
		case 'LOGOUT':
			return { ...data, isLoggedIn: false };
		default:
			return state;
	}
};
export { loginReducer };
