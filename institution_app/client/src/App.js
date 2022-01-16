/* eslint-disable quotes */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/Login/LoginComponent';
import SuperAdminDashboard from './components/SuperAdmin';
import store from './store';
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Provider store={store}>
					<Routes>
						<Route
							path='/superAdminLogin'
							element={
								<LoginComponent
									nextPath='/superAdminDashboard'
									component='superAdmin'
								/>
							}
						/>
						<Route
							path='/adminLogin'
							element={
								<LoginComponent nextPath='/adminDashboard' component='admin' />
							}
						/>
						<Route
							path='/'
							element={
								<LoginComponent
									nextPath='/superAdminDashboard'
									component='superAdmin'
								/>
							}
						/>
						<Route
							path='/superAdminDashboard'
							element={<SuperAdminDashboard />}
						/>
					</Routes>
				</Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
