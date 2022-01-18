/* eslint-disable default-param-last */
import jwt from 'jwt-decode';

const userData = localStorage.getItem('token')
  ? jwt(localStorage.getItem('token'))
  : {};
const initialState = { isLoggedIn: false, ...userData };
const loginReducer = (state = initialState, action) => {
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
