import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import SuperAdminDashboard from '../../pages/SuperAdmin';
import store from '../../store';
import LoginComponent from './LoginComponent';

const handlers = [
  rest.post(
    'https://institution-app.herokuapp.com/api/v1/superAdmin/login',
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWU2YzU3NzViYTFjNTcyMTc1ZDJmZjMiLCJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwicm9sZSI6IlNVUEVSIEFETUlOIiwiaWF0IjoxNjQzMDE2OTQwLCJleHAiOjE2NDU2MDg5NDB9.9ath5K9wJK1fmTpjOwXOZ__O5KE4OI7ELc9jzqkIvvo',
        })
      )
  ),
];
const server = setupServer(...handlers);
beforeAll(() => {
  act(() => server.listen());
});
const renderLogin = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginComponent component="superAdmin" nextPath="/superAminDashboard" />
      </BrowserRouter>
    </Provider>
  );

test('Form should not be submitted when email or password is not given', async () => {
  renderLogin();

  userEvent.click(await screen.findByTestId('login-button'));

  expect(await screen.findAllByText('Required')).toHaveLength(2);
});
test('User should be prompted when invalid email address in entered', async () => {
  renderLogin();

  userEvent.type(await screen.findByTestId('email'), 'test');
  userEvent.click(await screen.findByTestId('login-button'));
  expect(
    await screen.findByText('Enter valid email address')
  ).toBeInTheDocument();
});
test('User should be prompted when password is less than 8 characters', async () => {
  renderLogin();
  userEvent.type(await screen.findByTestId('password'), 'test');
  userEvent.click(await screen.findByTestId('login-button'));
  expect(
    await screen.findByText('Password must be minimum 8 characters')
  ).toBeInTheDocument();
});

test('When user logins he should be taken to corresponding dashboard', async () => {
  const history = ['/superAdminLogin'];
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={history}>
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
            path="/superAdminDashboard"
            element={<SuperAdminDashboard />}
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  userEvent.type(await screen.findByTestId('email'), 'john@gmail.com');
  userEvent.type(await screen.findByTestId('password'), '12345678');
  userEvent.click(await screen.findByTestId('login-button'));
  expect(await screen.findByText('Dashboard')).toBeInTheDocument();
  // expect(Navigate).toHaveBeenCalledWith('/adminDashboard');
});
