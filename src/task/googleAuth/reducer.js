const initialState = {
  isAuthenticated: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "AUTHENTICATION": {
      return Object.assign({}, state, {
        isAuthenticated: state.isAuthenticated
      });
    }
    default:
      return state;
  }
}
