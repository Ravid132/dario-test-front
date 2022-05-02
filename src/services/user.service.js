import { httpService } from './http.service';

export const userService = {
  getUsers,
};

async function getUsers() {
  const users = await httpService.get(`getUsers`);
  console.log('users:', users);
  return users;
}
