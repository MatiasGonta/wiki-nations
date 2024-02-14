import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const fetchCountries = (): Promise<AxiosResponse> => {
  return api.get('/all', {
    params: {
      fields: "name,region,subregion,capital,population,flags"
    },
  });
};

export const fetchCountryByName = (name: string): Promise<AxiosResponse> => {
  return api.get(`/name/${name}`);
};