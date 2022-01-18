import jwt from 'jwt-decode';

const logout = () => {
  localStorage.clear();
  return {
    type: 'LOGOUT',
    data: '',
  };
};
const loginSuccess = (payload) => {
  localStorage.setItem('token', payload);

  return {
    type: 'LOGIN_SUCCESS',
    data: jwt(payload),
  };
};
export { loginSuccess, logout };
