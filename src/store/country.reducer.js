const initialState = {
  countries: [],
};

export function countryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, countries: action.countries };
    default:
      return state;
  }
}
