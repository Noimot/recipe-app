import axios from "../utils/axios";

export const loginApi = async (userData) => {
  let response = await axios.post(`/users/login`, userData);
  return response.data;
};

export const signupApi = async (userData) => {
  let response = await axios.post(`/users/signup`, userData);
  return response.data;
};
