import axios from "axios";
const api_key = 'e08815ebb9a68b5816a9e3ae26b751e1';

export function requestToken() {
  return axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`)
}
