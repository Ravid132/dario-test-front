import { countryService } from '../services/country.service';

export function loadCountries() {
  return async (dispatch) => {
    try {
      const countries = await countryService.getCountries();
      dispatch({ type: 'SET_COUNTRIES', countries });
    } catch (err) {
      console.log('CountryeActions: err in loadCountries', err);
    }
  };
}
