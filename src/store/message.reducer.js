const initialState = {
  messages: [],
};

export function messageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { ...state, messages: action.messages };
    default:
      return state;
  }
}
