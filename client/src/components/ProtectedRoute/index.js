/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, role }) {
  const state = useSelector((loginState) => loginState.login);

  const getUrl = () => {
    switch (role) {
      case 'SUPER ADMIN':
        return '/superAdminLogin';
      case 'ADMIN':
        return '/adminLogin';
      default:
        return '/';
    }
  };
  const redirectTo = getUrl();
  return state.isLoggedIn && state.role === role ? (
    children
  ) : (
    <Navigate to={`${redirectTo}`} />
  );
}
export default ProtectedRoute;
ard;
