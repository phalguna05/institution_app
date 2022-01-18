import { combineReducers, createStore } from 'redux';
import { loginReducer } from '../components/Login/Reducers';
import { superAdminReducer } from '../components/SuperAdmin/Reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  superAdmin: superAdminReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
