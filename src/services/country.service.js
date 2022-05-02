import { httpService } from './http.service';

export const countryService = {
  getCountries,
};

async function getCountries() {
  const countries = await httpService.get(`getCountries`);
  return countries;
}
