import jwt from 'jwt-decode';

const loginSuccess = (payload) => {
	localStorage.setItem('token', payload);

	return {
		type: 'LOGIN_SUCCESS',
		data: jwt(payload),
	};
};
export { loginSuccess };
