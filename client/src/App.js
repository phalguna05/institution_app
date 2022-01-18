/* eslint-disable quotes */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/Login/LoginComponent';
import ProtectedRoute from './components/ProtectedRoute';
import SuperAdminDashboard from './components/SuperAdmin';
import store from './store';
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/superAdminLogin"
            element={
              <LoginComponent
                nextPath="/superAdminDashboard"
                component="superAdmin"
              />
            }
          />
          <Route
            path="/adminLogin"
            element={
              <LoginComponent nextPath="/adminDashboard" component="admin" />
            }
          />
          <Route
            path="/"
            element={
              <LoginComponent
                nextPath="/superAdminDashboard"
                component="superAdmin"
              />
            }
          />
          <Route
            path="/superAdminDashboard"
            element={
              <ProtectedRoute role="SUPER ADMIN">
                <SuperAdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
