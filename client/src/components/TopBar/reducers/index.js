const initialState = { activeIndex: 0 };

const topBarReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_DASHBOARD_STATE':
      return { ...state, activeIndex: data };
    default:
      return state;
  }
};
export { topBarReducer };
