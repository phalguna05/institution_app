import { combineReducers, createStore } from 'redux';
import { loginReducer } from '../components/Login/Reducers';
import { topBarReducer } from '../components/TopBar/reducers';
import { studentReducer } from '../pages/Student/reducers';
import { superAdminReducer } from '../pages/SuperAdmin/Reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  superAdmin: superAdminReducer,
  student: studentReducer,
  topBar: topBarReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
