import axios from 'axios';

export const recipesApi = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
