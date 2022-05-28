import { data } from "autoprefixer";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL +"/auth";
export const register = async (data) => {
  return await axios.post(API_URL + "/signup", data);
};
export const login = (username, password) => {
  return axios.post(API_URL + "/signin", {
    username,
    password,
  });
};
export const logout = () => {
  localStorage.removeItem("user");
};
export const verifyEmail = (code) => {
  return axios.post(API_URL + "verify", {}, { params: { code } });
};

export const search = (data) => {
  return axios.get(process.env.REACT_APP_API_URL + "/books/search", {
    params: { ...data },
  });
};
export const forgotPassword = (data) => {
  return axios.post(API_URL + 'forgotpassword' , data );
};
export const resetpassword = (code , newPassword) =>{
  return axios.post(API_URL + 'resetpassword', { code , newPassword} )  
}
