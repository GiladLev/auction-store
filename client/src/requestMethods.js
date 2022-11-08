import axios from "axios";

const BASE_URL = "https://awful-foal-lapel.cyclic.app/api/";

const user =JSON.parse(localStorage?.getItem('user'))
const TOKEN = user?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});