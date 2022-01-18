const initialState = { dashboardDisplay: 'home' };
const superAdminReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_DASHBOARD_STATE':
      return { ...state, dashboardDisplay: data };
    default:
      return state;
  }
};
export { superAdminReducer };
