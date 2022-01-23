const initialState = { dashboardDisplay: 'home', adminList: [] };
const superAdminReducer = (state = initialState, action) => {
	const { type, data } = action;
	switch (type) {
		case 'SET_DASHBOARD_STATE':
			return { ...state, dashboardDisplay: data };
		case 'ADD_ADMINS':
			return { ...state, adminList: data };
		case 'ADD_SINGLE_ADMIN': {
			const list = state.adminList;
			const modifiedList = [...list, data];
			return { ...state, adminList: modifiedList };
		}
		default:
			return state;
	}
};
export { superAdminReducer };
