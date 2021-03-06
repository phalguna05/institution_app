/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
/* eslint-disable quotes */
// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/Login/LoginComponent';
import ProtectedRoute from './components/ProtectedRoute';
import Student from './pages/Student';
import SuperAdminDashboard from './pages/SuperAdmin';
import store from './store';
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
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
            <Route path="/student/dashboard" element={<Student />} />
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
}

export default App;
