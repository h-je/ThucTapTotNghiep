import axiosClient from "./axiosClient";

const AUTH_API = "/auth";


const authApi = {
 
  postSignin: (info_account) => {
    const url = AUTH_API + "/signin";
    return axiosClient.post(url, info_account);
  },
 
  postSignup: (info_account) => {
    const url = AUTH_API + "/signup";
    return axiosClient.post(url, info_account);
  },

  
};

export default authApi;