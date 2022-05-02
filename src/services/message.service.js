import { httpService } from './http.service';
import axios from 'axios';

export const messageService = {
  query,
};

async function query(filterBy) {
  const messages = await httpService.get(`getMessages`, {
    params: filterBy,
  });

  return messages;
}
