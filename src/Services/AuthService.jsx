import axios from "axios";
import { environment } from "../environment/environment";

export const UserLoginData = {
  email: '',
  password: ''
};
export const UserReset = {
  userId: '',
  token: '',
  password: ''
};
export const UserUpdateData = {
  email: ''
}

export const TOKEN_KEY = "token";

export const getMe = async () => {
  try {
    const response = await axios.get(`${environment.api_url}/auth/me`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const userLogin = async (userLoginData) => {
  try {
    const response = await axios.post(`${environment.api_url}/public/login`, userLoginData);
    if (response.success) {
      localStorage.setItem(TOKEN_KEY, response.data);
    }
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getToken = async () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = async (token) => { 
  localStorage.setItem(TOKEN_KEY, token);
  // test
}
