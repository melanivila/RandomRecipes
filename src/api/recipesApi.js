import axios from 'axios';
import { REACT_APP_API_KEY } from '@env';

export const recipesApi = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: REACT_APP_API_KEY,
  },
});
