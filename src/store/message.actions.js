import { messageService } from '../services/message.service';

export function loadMessages(filterBy) {
  return async (dispatch) => {
    try {
      const messages = await messageService.query(filterBy);
      dispatch({ type: 'SET_MESSAGES', messages });
    } catch (err) {
      console.log('MessageActions: err in loadMessages', err);
    }
  };
}

export function loadCountries() {
  return async (dispatch) => {
    try {
      const countries = await messageService.getCountries();
      dispatch({ type: 'SET_COUNTRIES', countries });
    } catch (err) {
      console.log('MessageActions: err in loadCountries', err);
    }
  };
}
