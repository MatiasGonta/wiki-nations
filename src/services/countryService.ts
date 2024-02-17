import type { AxiosInstance } from 'axios';
import axios from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const fetchCountries = () => {
  try {
    return api.get('/all', {
      params: {
        fields: "name,region,subregion,capital,population,flags"
      },
    });
  } catch (error) {
    console.log('Error: ', error);
    return { data: undefined };
  }
};

export const fetchCountryByName = (name: string) => {
  try {
    return api.get(`/name/${name}`);
  } catch (error) {
    console.log('Error: ', error);
    return { data: undefined };
  }
};